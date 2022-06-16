const conn = require('../infra/db-connection')('infra/blog.db')
const postsDAO = require('../dao/posts-dao')(conn)

exports.newPost = (req, res) => {
  res.render('index', {
    role: 'new-post',
    isInvalid: false
  })
}

exports.getPosts = (req, res) => {
  const userSession = req.session

  let isLoggedIn
  userSession.token ? (isLoggedIn = true) : (isLoggedIn = false)
  postsDAO.findAll((err, rows) => {
    if (err) {
      return res.json({ err: 'Erro ao consultar os dados' })
    }

    return res.render('index', {
      role: 'home',
      isLoggedIn,
      posts: rows
    })
  })
}

exports.getPost = (req, res) => {
  const userSession = req.session
  const userId = userSession.UserId

  postsDAO.findById(req.params.id, (err, post) => {
    if (err) {
      return res.json({ err: 'Erro ao consultar os dados' })
    }

    if (post === undefined) {
      return res.redirect('/')
    }

    return res.render('index', {
      role: 'post',
      userId,
      post
    })
  })
}

exports.savePost = (req, res) => {
  const userSession = req.session
  const userId = userSession.UserId
  const { title, content } = req.body

  if (title === '' || content === '') {
    return res.render('index', {
      role: 'new-post',
      isInvalid: true
    })
  }
  
  postsDAO.save(userId, title, content, (err) =>{
    if (err) {
      return res.json({ err: 'Erro ao gravar os dados' })
    }

    return res.redirect('/')
  })
}

exports.editPost = (req, res) => {
  const userSession = req.session
  const userId = userSession.UserId

  const id = req.params.id

  postsDAO.findById(id, (err, post) => {
    if (err) {
      return res.json({ err: 'Erro ao consultar os dados' })
    }

    if (post === undefined || userId !== post.id_user) {
      return res.redirect('/')
    }

    return res.render('index', {
      role: 'edit-post',
      userId,
      post,
      isInvalid: false
    })
  })
}

exports.editedPost = (req, res) => {
  const userSession = req.session
  const userId = userSession.UserId
  const {title, content} = req.body
  const id = req.params.id

  postsDAO.findById(id, (err, post) => {
    if (err) {
      return res.json({ err: 'Erro ao consultar os dados' })
    }

    if (post === undefined || userId !== post.id_user) {
      return res.redirect('/')
    }

    if (title === '' || content === '') {
      return res.render('index', {
        role: 'edit-post',
        userId,
        post,
        isInvalid: true
      })
    }

    postsDAO.edit(id, title, content, err2 => {
      if (err2) {
        return res.json({ err: 'Erro ao atualizar os dados' })
      }

      return res.redirect(`/post/${id}`)
    })
  })
}

exports.deletePost = (req, res) => {
  const id = req.params.id;

  postsDAO.delete(id, (err) => {
    if (err) {
      return res.json({ err: "Erro ao remover os dados" });
    }

    return res.redirect("/");
  });
}
