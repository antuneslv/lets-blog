module.exports = (req, res, next) => {
  const userSession = req.session
  if (!userSession.token) {
    return res.redirect('/log-in')
  }

  next()
}
