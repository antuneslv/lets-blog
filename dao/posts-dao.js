class PostsDAO {
  constructor(conn) {
    this.db = conn
  }

  findAll(callback) {
    this.db.all(
      'SELECT *, (SELECT name FROM users WHERE id_user = id) as author FROM posts',
      callback
    )
  }

  findById(id, callback) {
    this.db.get(
      'SELECT *, (SELECT name FROM users WHERE id_user = id) as author FROM posts WHERE id = ?',
      id,
      callback
    )
  }

  save(userId, title, content, callback) {
    this.db.run(
      'INSERT INTO posts (id_user, title, content, created_date) VALUES (?, ?, ?, datetime("now", "localtime"))',
      [userId, title, content],
      callback
    )
  }
}

module.exports = conn => new PostsDAO(conn)
