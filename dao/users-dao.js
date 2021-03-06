class UsersDAO {
  constructor(conn) {
    this.db = conn
  }

  findByEmail(email, callback) {
    this.db.get('SELECT * FROM users WHERE email = $email', email, callback)
  }

  findAll(callback) {
    this.db.all('SELECT * FROM users', callback)
  }

  save(email, name, passwordHash, callback) {
    this.db.run(
      'INSERT INTO users (email, name, password, created_date) VALUES (?, ?, ?, datetime("now", "localtime"))',
      [email, name, passwordHash],
      callback
    )
  }
}

module.exports = conn => new UsersDAO(conn)
