const helper = require('../helpers/response');
const userModel = require('../models/user');

module.exports = {
  getUserData: async (req, res) => {
    try {
      const id = req.params.id
      const result = await userModel.getUserData(id);
      return helper.response(res, 'success', result, 200)
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', err, 500)
    }
  },
  updateUserData: async (req, res) => {
    try {
      const id = req.params.id
      let setData = req.body
      if(req.file) {
        setData.profile_img = req.file.filename
      }
      // Hapus image ketika update
      // console.log(req.file);
      // console.log(setData);
      const result = await userModel.updateUserData(id, setData);
      // console.log("###########")
      // console.log(result);
      // res.status(200);
      return helper.response(res, 'success', result, 200)
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', err, 500)
    }
  }
}
