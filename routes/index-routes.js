const postsController = require('../controllers/posts-controller')
const usersController = require('../controllers/users-controller')
const loginController = require('../controllers/login-controller')
const checkToken = require('../middlewares/middleware')

module.exports = app => {
  app.get('/', postsController.getPosts)
  app.get('/post/:id', postsController.getPost)

  app.get('/log-in', loginController.login)
  app.post('/log-in', loginController.auth)
  app.get('/log-out', loginController.logout)

  app.get('/sign-up', usersController.openSignUp)

  app.get('/new-post', checkToken, (req, res) => {
    res.render('index', { role: 'new-post' })
  })
}
