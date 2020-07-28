module.exports = {
  user: {
    get: "SELECT * FROM users WHERE id = ?",
  },
  msg: {
    latestMessages: "SELECT messages.id, messages.sender_id, users.name as sender_name, messages.receiver_id, messages.message, messages.created_at FROM messages INNER JOIN users ON users.id=messages.sender_id WHERE messages.id IN (SELECT MAX(id) FROM messages WHERE messages.receiver_id=? GROUP BY messages.sender_id) ORDER BY created_at DESC",
    message: "SELECT * FROM messages WHERE sender_id=? && receiver_id=? ORDER BY id DESC"    
  },
  auth: {
    register: "INSERT INTO users SET ?",
    login: "SELECT * FROM users WHERE email=?",
  },
  contact: {
    get: "SELECT * FROM users WHERE NOT id=? ORDER BY name"
  },
}

// BACKUP
// SELECT * FROM `messages` WHERE receiver_id=2 GROUP BY sender_id ORDER BY id DESC

/*
 SELECT * 
FROM `messages` 
WHERE receiver_id=2 
GROUP BY sender_id ORDER BY id DESC
*/

// Contact List
/*
SELECT * FROM `users` WHERE NOT (id=26) ORDER BY `id`  DESC
*/