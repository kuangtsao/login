// express setting
const express = require('express')
const app = express()
const port = 3000

// express-handlebars setting
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// import body-parser
app.use(express.urlencoded({ extended: true }))

// load accounts
const accountsList = require('./accounts.json')

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  // 保留原始的搜尋字串
  const account = req.body.accountInput
  const password = req.body.passwordInput

  const user = accountsList.users.find(list => list.email === account && list.password === password)

  if (user.length > 0) {
    console.log('render landing page.')
    // res.render('landing', { userName: user.firstName })
  } else {
    console.log('render error message in index.')
    // res.render('index', { findingStatus: false })
  }
})

app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})
