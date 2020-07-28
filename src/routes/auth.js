const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

const multer = require('../helpers/multer');

router.post('/register', multer.single('image'), authController.register);
router.post('/login', multer.none(), authController.login);

module.exports = router;