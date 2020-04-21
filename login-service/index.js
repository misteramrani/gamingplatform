const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('../Database/mvidia_database.db')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('Hello World!')

})

app.post('/login', (request, response) => {

    var email = request.body.email;
    var password = request.body.password;

    db.all('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
        if (results.length > 0) {
            response.status(200).send({ Code: '200' })
        } else {
            response.status(403).send({ errorCode: '403' })
        }
    });
})

app.post('/signup', (request, response) => {

    var email = request.body.email;
    var password = request.body.password;
    console.log(password)

    db.all('INSERT INTO users (email, password) VALUES (?,?);', [email, password], (error, results) => {
        var doesemailexist = db.all('SELECT * FROM users WHERE email = ($email)');

        console.log(doesemailexist)
        if (error) {
            response.sendStatus(400)
            console.log('400')

        } else {
            response.sendStatus(200)
            console.log('200')
        }
    });
})

app.get('/gamedashboard', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    db.all('SELECT * FROM games', (error, results) => {
        console.log(results)
        res.json(results);
    });
})

app.post('/snake', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    var gamePlayer = req.body.user;
    var scoreOfGame = req.body.game + "_score";
    var score = req.body.score;
    console.log(scoreOfGame)

    db.all('INSERT INTO users (email, password) VALUES (?,?);', [email, password], (error, results) => {
        var doesemailexist = db.all('SELECT * FROM users WHERE email = ($email)');



        'SELECT scoreOfGame FROM users WHERE email = ($gamePlayer)'
        // als score hoger is dan wat in DB staat of als dbscore is null, dan update. Als gelijk of lager, dan niets doen

        // als game niet in database, dan aanmaken (of zet zelf de keys in database) 
        'ALTER TABLE`table` ADD INDEX`product_id`(`product_id`)'

    })
})



app.listen(8000, () => console.log(`Listening on port 8000`))