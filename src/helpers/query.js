module.exports = {
  user: {
    get: "SELECT * FROM users WHERE id = ?",
  },
  auth: {
    register: "INSERT INTO users SET ?",
    login: "SELECT * FROM users WHERE email=?",
  }
}