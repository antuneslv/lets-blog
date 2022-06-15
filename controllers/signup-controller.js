const conn = require('../infra/db-connection')('infra/blog.db')
const usersDAO = require('../dao/users-dao')(conn)

exports.signUp = (req, res) => {
  res.render('index', {
    role: 'sign-up',
    isInvalid: false
  })
}

exports.newAcc = (req, res) => {
  const { email, name, password } = req.body

  usersDAO.findByEmail(email, (err, user) => {
    if (err || user ) {
      return res.render('index', {
        role: 'sign-up',
        isInvalid: true
      })
    }
  })

  usersDAO.save(email, name, password, (err) => {
    if (err) {
      return res.json({ err: 'Erro ao gravar os dados' })
    }

    return res.redirect('/log-in')
  })
}
