const conn = require('../infra/db-connection')('infra/blog.db')
const usersDAO = require('../dao/users-dao')(conn)
const jwt = require('jsonwebtoken')

let userSession

exports.login = (req, res) => {
  res.render('index', 
  {
    role: 'log-in',
    isInvalid: false
  })
}

exports.auth = (req, res) => {
  userSession = req.session
  
  const { email, password } = req.body

  usersDAO.findByEmail(email, (err, user) => {
    if (err || !user || password !== user.password) {
      return res.render('index', {
        role: 'log-in',
        isInvalid: true
      })
    }

    const secret = process.env.SECRET
    const token = jwt.sign(
      {
        id: user.id
      },
      secret
    )

    userSession.token = token

    res.redirect('/')
  })
}

exports.logout = (req, res) => {
  userSession = req.session

  userSession.token = null

  res.redirect('/')
}
