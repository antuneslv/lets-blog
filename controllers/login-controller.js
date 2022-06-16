const conn = require('../infra/db-connection')('infra/blog.db')
const usersDAO = require('../dao/users-dao')(conn)
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

let userSession

exports.logIn = (req, res) => {
  res.render('index', 
  {
    role: 'log-in',
    isInvalid: false
  })
}

exports.auth = (req, res) => {
  userSession = req.session

  const { email, password } = req.body

  usersDAO.findByEmail(email, async (err, user) => {
    let checkPassword

    if (user) {
      checkPassword = await bcrypt.compare(password, user.password)
    }

    if (err || !user || !checkPassword) {
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
    userSession.UserId = user.id

    res.redirect('/')
  })
}

exports.logOut = (req, res) => {
  userSession = req.session

  userSession.token = null
  userSession.UserId = null

  res.redirect('/')
}
