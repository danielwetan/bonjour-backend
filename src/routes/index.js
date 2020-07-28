const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const userRouter = require('./user');

router.use('/auth', authRouter);
router.use('/u', userRouter)
router.use('*', (req, res) => {
  res.json({msg: 'Page not found - 404'})
})

module.exports = router;