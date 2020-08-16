const express = require('express');
const router = express.Router()
const userController = require('../controllers/user');
const upload = require('../helpers/multer');

router.get('/:id', userController.getUserData);
router.put('/:id', upload.single("profile_img"),userController.updateUserData);
// put -> semua data diupdate
// patch -> update salah satu data

module.exports = router;
