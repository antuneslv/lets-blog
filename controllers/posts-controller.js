const conn = require('../infra/db-connection')('infra/blog.db')
const postsDAO = require('../dao/posts-dao')(conn)

exports.getPosts = (req, res) => {
  postsDAO.findAll((err, rows) => {
    if (err) {
      return res.json({ err: 'Erro ao consultar os dados' })
    }

    return res.render('index', {
      role: 'posts',
      posts: rows
    })
  })
}
