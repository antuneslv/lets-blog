const conn = require('../infra/db-connection')('infra/blog.db')
const usersDAO = require('../dao/users-dao')(conn)
const bcrypt = require('bcrypt')

exports.signUp = (req, res) => {
  res.render('index', {
    role: 'sign-up',
    errorEmail: null,
    errorName: null,
    errorPassword: null,
  })
}

exports.newAcc = async (req, res) => {
  const { email, name, password } = req.body

  const salt = await bcrypt.genSalt(12)
  const passwordHash = await bcrypt.hash(password, salt)

  usersDAO.findByEmail(email, (err, user) => {
    let errorEmail = null
    let errorName = null
    let errorPassword = null
    
    if (err || user) {
      errorEmail = 'E-mail já cadastrado.'
      return res.render('index', {
        role: 'sign-up',
        errorEmail,
        errorName,
        errorPassword
      })
    } 
    
    if (!email || !name || !password) {
      !email ? (errorEmail = 'E-mail obrigatório') : (errorEmail = null)

      !name ? (errorName = 'Nome obrigatório') : (errorName = null)

      !password ? (errorPassword = 'Senha obrigatória') : (errorPassword = null)

      return res.render('index', {
        role: 'sign-up',
        errorEmail,
        errorName,
        errorPassword
      })
    }

    usersDAO.save(email, name, passwordHash, (err2) => {
      if (err2) {
        return res.json({ err: 'Erro ao gravar os dados' })
      }
  
      return res.redirect('/log-in')
    })
  })
}
