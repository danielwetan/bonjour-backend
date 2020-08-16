const helper = require('../helpers/response');
const userModel = require('../models/user');
const redis = require('../middleware/redis');

module.exports = {
  getUserData: async (req, res) => {
    try {
      const id = req.params.id
      const result = await userModel.getUserData(id);
      const entries = Object.entries(result[0]);
      const obj = Object.fromEntries(entries);
      delete obj.created_at
      delete obj.updated_at
      console.log("Hello from main controller")
      const name = 'user';
      redis.caching(name, id, obj)
      return helper.response(res, 'success', obj, 200)
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', err, 500)
    }
  },
  updateUserData: async (req, res) => {
    try {
      const id = req.params.id
      let setData = req.body
      if (req.file) {
        setData.profile_img = req.file.filename
      }
      const name = "user";
      redis.deleteCache(`${name}:` + id);
      const result = await userModel.updateUserData(id, setData);
      return helper.response(res, 'success', result, 200)
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', err, 500)
    }
  }
}
