const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express();
const PORT = 3000;

app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(session ({
    secret: 'a world made steel',
    resave: false, 
    saveUninitialized: false, 
}))

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
})

app.use((req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message || "Internal server error");
    })

app.listen(PORT, () => 
    console.log(`
    Listening on port ${PORT}
    http://localhost:3000/
    `))
