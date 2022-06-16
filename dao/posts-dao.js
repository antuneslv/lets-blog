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

  edit(id, title, content, callback) {
    this.db.run(
      'UPDATE posts SET title = ?, content = ?, edited_date = datetime("now", "localtime") WHERE id = ?',
      [title, content, id],
      callback
    )
  }

  delete(id, callback) {
    this.db.run('DELETE FROM posts WHERE id = ?', id, callback)
  }
}

module.exports = conn => new PostsDAO(conn)
