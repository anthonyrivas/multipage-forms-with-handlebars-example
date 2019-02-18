const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
let users = []

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))

app.engine('handlebars', handlebars(
    {
        defaultLayout: 'main'
    }
))

app.set('view engine', 'handlebars')

//routes in server file for ease of reference

//api routes
app.post('/api/user', (req, res) => {
    let id = users.length
    users[id] = {}
    users[id].username = req.body.username
    users[id].password = req.body.password
    res.json({ id })
})
app.put('/api/user/:id', (req, res) => {
    users[req.params.id].name = req.body.name
    users[req.params.id].age = req.body.age
    res.json({ id: req.params.id })
})

// html routes
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/form2/:id', (req, res) => {
    res.render('form2', { id: req.params.id })
})
app.get('/user/:id', (req, res) => {
    console.log(users[req.params.id])
    res.render('user', users[req.params.id])
})

app.listen(3000, () => {
    console.log(`App started on port 3000`)
})