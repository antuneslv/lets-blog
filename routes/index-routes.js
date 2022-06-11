const postsController = require('../controllers/posts-controller')

module.exports = app => {
  app.get('/', postsController.getPosts)
}
