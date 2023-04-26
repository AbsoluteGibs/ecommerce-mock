const express = require('express')

const app = express()

app.set('view engine', 'ejs')

// displays successful response text on the site when root of domain is visited
app.get('/', (req, res) => {
    res.render('home', { deez: "nuts" })
})

// importing users.js, can be used to populate routes for multiple other pages, like shopping cart etc.
const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(3000, () => console.log("App is listening on port 3000"))