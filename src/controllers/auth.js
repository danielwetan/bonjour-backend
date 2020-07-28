const authModel = require('../models/auth');
const helper = require('../helpers/response');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/global');

module.exports = {
  register: async (req, res) => {
    const setData = req.body;
    // console.log(setData.profile_img)
    setData.profile_img = req.file ? req.file.filename : '';
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(setData.password, salt);
    setData.password = hashPass;
    try {
      const result = await authModel.registerModel(setData);
      delete result.password;
      return helper.response(res, 'success', result, 200);
    } catch(err) {
      console.log(err);
      return helper.response(res, 'fail', err, 500)
    }
  },
  login: async (req, res) => {
    const loginData = req.body;
    try {
      const result = await authModel.loginModel(loginData.email);
      if(result.length > 0) {
        const hashPass = result[0].password;
        const checkPass = bcrypt.compareSync(loginData.password, hashPass);
        if(checkPass) {
          delete result[0].password;

          const tokenData = {
            ...result[0],
          }
          const token = jwt.sign(tokenData, config.jwt.secretKey, { expiresIn: config.jwt.tokenLife});
          result[0].token = token
          return helper.response(res, 'success', result, 200);
        }
        return helper.response(res, 'fail', 'Username or password is wrong!', 400);
      }
      return helper.response(res, 'fail', 'Username or password is wrong!', 400);
    } catch(err) {
      console.log(err);
      return helper.response(res, 'fail', 'Something error!', 200)
    }
  }
}