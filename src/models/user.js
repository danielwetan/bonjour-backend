const connection = require('../helpers/mysql');
const query = require('../helpers/query');

module.exports = {
  getUserData: id => {
    return new Promise((resolve, reject) => {
      connection.query(query.user.get, id, (err, result) => {
        if(err) {
          reject(err);
        }
        // bug
        // remove password, created_at, updated_at from endpoint result
        // delete result[0].password
        // delete result[0].created_at
        // delete result[0].updated_at
        resolve(result);
      })
    })
  }
}