class UsersDAO {
  constructor(conn) {
    this.db = conn
  }

  findAll(callback) {
    this.db.all('SELECT * FROM users', callback)
  }

  findById(id, callback) {
    this.db.get('SELECT * FROM posts WHERE id = ?', id, callback)
  }
}

module.exports = conn => new UsersDAO(conn)
