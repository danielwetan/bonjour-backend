const connection = require('../helpers/mysql');
const query = require('../helpers/query');

module.exports = {
  getLatestMessages: id => {
    return new Promise((resolve, reject) => {
      connection.query(query.msg.latestMessages, id, (err, result) => {
        if(err) {
          reject(err);
        }
        resolve(result)
      })
    })
  },
  getMessage: (sender, receiver) => {
    return new Promise((resolve, reject) => {
      connection.query(query.msg.message, [sender,receiver, receiver, sender], (err, result) => {
        if(err) {
          reject(err);
        }
        resolve(result)
      })
    })
  },
  postMessage: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(query.msg.post, setData, (err, result) => {
        if(err) {
          reject(err);
        }
        resolve(result);
      })
    })
  }
}
