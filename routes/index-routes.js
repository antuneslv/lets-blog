const postsController = require('../controllers/posts-controller')
const signupController = require('../controllers/signup-controller')
const loginController = require('../controllers/login-controller')
const checkToken = require('../middlewares/middleware')

module.exports = app => {
  app.get('/', postsController.getPosts)
  app.get('/post/:id', postsController.getPost)

  app.get('/log-in', loginController.logIn)
  app.post('/log-in', loginController.auth)
  app.get('/log-out', loginController.logOut)

  app.get('/sign-up', signupController.signUp)
  app.post('/sign-up', signupController.newAcc)

  app.get('/new-post', checkToken, postsController.newPost)
  app.post('/new-post', postsController.savePost)

  app.get('/edit-post/:id', checkToken, postsController.editPost)
  app.post('/edit-post/:id', postsController.editedPost)
}
