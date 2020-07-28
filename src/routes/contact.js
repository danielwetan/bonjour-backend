const express = require('express');
const router = express.Router()
const contactController = require('../controllers/contact');

router.get('/:id', contactController.getContactData);

module.exports = router;