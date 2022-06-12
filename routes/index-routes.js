const postsController = require('../controllers/posts-controller')
const usersController = require('../controllers/users-controller')

module.exports = app => {
  app.get('/', postsController.getPosts)
  app.get('/post/:id', postsController.getPost)
  app.get('/log-in', (req, res) => {
    res.render('index', { role: 'log-in' })
  })
  app.get('/sign-up', usersController.openSignUp)
  app.get('/new-post', (req, res) => {
    res.render('index', { role: 'new-post' })
  })
}
