const config = {
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  jwt: {
    secretKey: process.env.JWT_SECRET,
    tokenLife: process.env.JWT_TOKEN_LIFE,
  }
}

module.exports = config;