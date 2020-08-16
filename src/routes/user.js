const express = require('express');
const router = express.Router()
const userController = require('../controllers/user');
const upload = require('../helpers/multer');
const redis = require('../middleware/redis');

router.get('/:id', redis.getCached('user'), userController.getUserData);
router.put('/:id', upload.single("profile_img"), userController.updateUserData);

module.exports = router;
