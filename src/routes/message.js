const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message');
// const multer = require('../helpers/multer');


router.get('/', messageController.getMessage);
// router.get('/:id', messageController.getLatestMessages);
// router.post('/', messageController.postMessage);

module.exports = router;