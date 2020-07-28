const connection = require('../helpers/mysql');
const query = require('../helpers/query');

module.exports = {
  getContactData: id => {
    return new Promise((resolve, reject) => {
      connection.query(query.contact.get, id, (err, result) => {
        if(err) {
          reject(err)
        }
        for (let i = 0; i <= result.length-1; i++) {
          delete result[i].password
          delete result[i].created_at
          delete result[i].updated_at
        }
        resolve(result);
      })
    })
  }
}