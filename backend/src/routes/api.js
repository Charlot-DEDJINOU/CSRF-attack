const express = require('express');
const router = express.Router();
const cookieController = require('../controllers/cookieController')

router.post('/', cookieController.store);

module.exports = router;