# Exemples d'Attaque CSRF

Ce projet est un exemple pédagogique d'attaque CSRF (Cross-Site Request Forgery) pour démontrer comment une application web peut être vulnérable à ce type d'attaque.

## Objectif

L'objectif de ce projet est de montrer comment une attaque CSRF peut être réalisée et de sensibiliser aux mesures de sécurité nécessaires pour protéger les applications web contre de telles attaques.

## Technologies Utilisées

- **Frontend**: JavaScript
- **Backend**: Express.js
- **Base de Données**: MongoDB

## Fonctionnalités

- **Exfiltration de Données**: Un script malveillant récupère des données sensibles d'un site authentifié par l'utilisateur et les envoie à un serveur externe.
- **Rapport d'Erreurs**: Le script rapporte les erreurs survenues lors de l'exfiltration de données pour améliorer la robustesse de l'attaque.

## Structure du Projet

- `frontend/`: Contient le script malveillant JavaScript.
- `backend/`: Contient le serveur Express.js et les scripts de configuration de la base de données MongoDB.

## Installation et Configuration

### Prérequis

- Node.js et npm installés

### Étapes d'Installation

1. Clonez le dépôt :
   ```bash
   https://github.com/Charlot-DEDJINOU/CSRF-attack.git
   cd CSRF-attack
   ```

2. Installez les dépendances du backend :
   ```bash
   cd backend
   npm install
   ```

3. Configurez la base de données MongoDB :
   - Assurez-vous que MongoDB est en cours d'exécution.
   - Modifiez le fichier de configuration de la base de données si nécessaire (par exemple, `backend/src/config/moogose.js`).

4. Démarrez le serveur backend :
   ```bash
   node server.js ou nodemon server.js
   ```

### Exécution du Script Malveillant

1. Hébergez le script malveillant sur un serveur web accessible.
2. Hébergez votre backend sur un serveur web accessible.
3. N'oubliez pas d'adapter le script `frontend/app.js` à votre besoin (par exemple l'url du site cible et également de votre serveur backend)
2. Envoyez le lien du script à un utilisateur authentifié sur le site cible.
3. Lorsque l'utilisateur clique sur le lien, le script récupère les données sensibles et les envoie au serveur Express.js.

## Avertissement

Ce projet est destiné à des fins éducatives uniquement. N'utilisez pas ce code pour des activités malveillantes. Le but est de sensibiliser et de comprendre les vulnérabilités de sécurité pour mieux protéger les applications web.

## Contributions

Les contributions pour améliorer cet exemple et ajouter des mécanismes de défense contre les attaques CSRF sont les bienvenues. Veuillez soumettre des pull requests ou ouvrir des issues pour discuter des modifications.

**Auteur** : [Charlot DEDJINOU](https://charlot-dedjinou.vercel.app)