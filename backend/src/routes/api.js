const express = require('express');
const router = express.Router();
const cookieController = require('../controllers/cookieController')

router.get('/', cookieController.storeGet);
router.post('/', cookieController.storePost);
router.get('/proxy', cookieController.proxy);

module.exports = router;