require('dotenv').config()
const express = require('express')
const session = require('express-session')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false
  })
)

require('./routes/index-routes')(app)

app.listen(port, () => {
  console.log(`\nServer started on port ${port}!`)
})
