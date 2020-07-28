const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const messageRouter = require('./message');
const contactRouter = require('./contact');

router.use('/auth', authRouter);
router.use('/u', userRouter);
router.use('/msg', messageRouter);
router.use('/contact', contactRouter);
router.use('*', (req, res) => {
  res.json({msg: 'Page not found - 404'})
})

module.exports = router;