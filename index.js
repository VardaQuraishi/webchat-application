const express = require('express')

const config = express('./config/app.js')

const app = express()


app.get('/home', (req, res) => {
    return res.send('Home Screen')
})
app.get('/login', (req, res) => {
    return res.send('Login Screen')
})

const port = config.appPort

app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`)
})
console.log("hello world")