var  express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {
    // res.send('this is the home page');
    // res.sendFile(__dirname + '/index.html');
    res.render('index');
});

app.get('/contact', function (req, res) {
    // res.send('this is the contact page');
    // res.sendFile(__dirname + '/contact.html');
    // console.log(req.query);
    res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function (req, res) {
    var data = {
        age: 29,
        job: 'ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    };

    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
