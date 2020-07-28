const connection = require('../helpers/mysql');
const query = require('../helpers/query');

module.exports = {
  getContactData: id => {
    return new Promise((resolve, reject) => {
      connection.query(query.contact.get, id, (err, result) => {
        if(err) {
          reject(err)
        }
        // bug
        // remove password, created_at, updated_at from endpoint result
        // console.log("this is result")
        // console.log(result.length)
        resolve(result);
      })
    })
  }
}