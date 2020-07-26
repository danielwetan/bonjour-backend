module.exports = {
  auth: {
    register: "INSERT INTO users SET ?",
    login: "SELECT * FROM users WHERE email=?",
  }
}