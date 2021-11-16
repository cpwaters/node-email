const express = require('express');
const ejs = require('ejs');
const path = require('path')

const app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('email');
});

app.listen(1000, () => {
    console.log('Emailer server running...');
});
