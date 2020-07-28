const helper = require('../helpers/response');
const messageModel = require('../models/message');

module.exports = {
  getLatestMessages: async (req, res) => {
    try {
      const id = req.params.id
      const result = await messageModel.getLatestMessages(id);
      return helper.response(res, 'success', result, 200)
    } catch(err) {
      console.log(err)
      return helper.response(res, 'failed', err, 500)
    }
  }
}