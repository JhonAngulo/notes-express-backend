require('dotenv').config()

const variables = {
  db: {
    db_name: process.env.MONGO_DB_NAME,
    db_user: process.env.MONGO_DB_USER,
    db_password: process.env.MONGO_DB_PASSWORD,
  }
}

module.exports = variables