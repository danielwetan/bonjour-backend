const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message');
// const multer = require('../helpers/multer');


router.get('/:id', messageController.getLatestMessages);
// router.get('/:id', messageController.getMessage);
// router.post('/', messageController.postMessage);

module.exports = router;