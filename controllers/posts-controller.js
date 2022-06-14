const conn = require('../infra/db-connection')('infra/blog.db')
const postsDAO = require('../dao/posts-dao')(conn)

exports.getPosts = (req, res) => {
  const userSession = req.session

  let isLoggedIn
  userSession.token ? (isLoggedIn = true) : (isLoggedIn = false)
  postsDAO.findAll((err, rows) => {
    if (err) {
      return res.json({ err: 'Erro ao consultar os dados' })
    }

    return res.render('index', {
      role: 'home',
      isLoggedIn,
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
