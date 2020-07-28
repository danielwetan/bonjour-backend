module.exports = {
  user: {
    get: "SELECT * FROM users WHERE id = ?",
  },
  msg: {
    latestMessages: "select messages.id, messages.sender_id, users.name as sender_name, messages.receiver_id, messages.message, messages.created_at FROM messages INNER JOIN users ON users.id=messages.sender_id WHERE messages.id IN (SELECT MAX(id) FROM messages WHERE messages.receiver_id=? GROUP BY messages.sender_id) ORDER BY created_at DESC"
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

// CONVERSATION
/*
 SELECT id, sender_id, receiver_id, message
FROM `messages` 
WHERE sender_id IN (2, 4) AND receiver_id IN (2, 4)
ORDER BY id DESC LIMIT 1
*/

// Contact List
/*
SELECT * FROM `users` WHERE NOT (id=26) ORDER BY `id`  DESC
*/