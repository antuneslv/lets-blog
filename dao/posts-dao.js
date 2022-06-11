class PostsDAO {
  constructor(conn) {
    this.db = conn
  }

  findAll(callback) {
    this.db.all('SELECT * FROM posts', callback)
  }

  findById(id, callback) {
    this.db.get('SELECT * FROM posts WHERE id = ?', id, callback)
  }
}

module.exports = conn => new PostsDAO(conn)
