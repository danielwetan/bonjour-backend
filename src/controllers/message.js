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
  },
  getMessage: async (req, res) => {
    try {
      const sender = req.query.sender;
      const receiver = req.query.receiver;
      console.log(req.params)
      const result = await messageModel.getMessage(sender, receiver, receiver, sender);
      return helper.response(res, "success", result, 200);
    } catch(err) {
      console.log(err);
      return helper.response(res, 'failed', err, 500);
    }
  },
  postMessage: async (req, res) => {
    const setData = req.body;
    console.log(setData)
    try {
      const result = await messageModel.postMessage(setData); // result -> query db
      req.io.emit('message', setData)
      return helper.response(res, 'success', result, 200);
    } catch(err) {
      console.log(err);
      return helper.response(res, 'failed', err, 500);
    }
  }
}
