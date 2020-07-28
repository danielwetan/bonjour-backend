module.exports = {
  user: {
    get: "SELECT * FROM users WHERE id = ?",
  },
  message: {
    getAll: "SELECT messages.room_id, messages.sender_id, users.name as name, messages.message, messages.created_at FROM messages INNER JOIN users ON messages.sender_id=users.id",
    // change code bellow
    getSingleMsg: "SELECT messages.room_id, messages.sender_id, users.name as name, messages.message, messages.created_at FROM messages INNER JOIN users ON messages.sender_id=users.id WHERE room_id=2 && sender_id=3"
  },
  auth: {
    register: "INSERT INTO users SET ?",
    login: "SELECT * FROM users WHERE email=?",
  }
}