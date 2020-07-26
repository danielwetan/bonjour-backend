const express = require('express');
const app = express()
const authRouter = require('./auth');
const router = require('./auth');

router.use('/auth', authRouter);

module.exports = router;