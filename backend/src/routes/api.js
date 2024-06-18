const express = require('express');
const router = express.Router();
const cookieController = require('../controllers/cookieController')

router.get('/', cookieController.store);

module.exports = router;