const conn = require('../infra/db-connection')('infra/blog.db')
const postsDAO = require('../dao/posts-dao')(conn)

exports.getPosts = (req, res) => {
  postsDAO.findAll((err, rows) => {
    if (err) {
      return res.json({ err: 'Erro ao consultar os dados' })
    }

    return res.render('index', {
      role: 'home',
      posts: rows
    })
  })
}

exports.getPost = (req, res) => {
  postsDAO.findById(req.params.id, (err, rows) => {
    if (err) {
      return res.json({ err: 'Erro ao consultar os dados' })
    }

    return res.render('index', {
      role: 'post',
      post: rows
    })
  })
}
