const helper = require('../helpers/response');
const contactModel = require('../models/contact');
const redis = require('../middleware/redis');

module.exports = {
  getContactData: async (req, res) => {
    try {
      const id = req.params.id
      const result = await contactModel.getContactData(id);
      return helper.response(res, 'success', result, 200)
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', err, 500);
    }
  }
}