class UsersDAO {
  constructor(conn) {
    this.db = conn
  }

  findByEmail(email, callback) {
    this.db.get("SELECT * FROM users WHERE email = $email", email, callback)
  }

  // findAll(callback) {
  //   this.db.all('SELECT * FROM users', callback)
  // }

  // findById(id, callback) {
  //   this.db.get('SELECT * FROM posts WHERE id = ?', id, callback)
  // }
  
}

module.exports = conn => new UsersDAO(conn)
