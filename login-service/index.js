const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('../Database/users.db')
const bodyParser = require('body-parser')
const cors = require('cors')

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('Hello World!')

})


app.post('/login', (request, response) => {

    // response.setHeader('Access-Control-Allow-Origin', '*');

    var email = request.body.email;
    var password = request.body.password;
    console.log(request.body.email)

    db.all('SELECT * FROM users WHERE email = ? AND password = ?', [request.body.email, request.body.password], (error, results) => {
        if (results.length > 0) {

            response.status(200).send({ Code: '200' })

        } else {
            response.status(403).send({ errorCode: '403' })

        }
    });


})



app.listen(8000, () => console.log(`Listening on port 8000`))