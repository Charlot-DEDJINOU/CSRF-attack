const express = require('express');
const router = express.Router();
const cookieController = require('../controllers/cookieController')

router.post('/error', cookieController.storeError);
router.post('/data', cookieController.storeData);
router.get('/proxy', cookieController.proxy);

module.exports = router;