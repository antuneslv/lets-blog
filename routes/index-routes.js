const postsController = require('../controllers/posts-controller')

module.exports = app => {
  app.get('/', postsController.getPosts)
  app.get('/post/:id', postsController.getPost)
}
