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
  }
}