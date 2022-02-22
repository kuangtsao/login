// express setting
const express = require('express')
const app = express()
const port = 3000

// express-handlebars setting
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})
