const conn = require('../infra/db-connection')('infra/blog.db')
const usersDAO = require('../dao/users-dao')(conn)

exports.getUsers = (req, res) => {
  usersDAO.findAll((err, rows) => {
    if (err) {
      return res.json({ err: 'Erro ao consultar os dados' })
    }

    return res.render('index', {
      role: 'users',
      users: rows
    })
  })
}
