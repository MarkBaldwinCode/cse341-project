// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000; // So we can run on heroku || (OR) localhost:5000
const CONNECTION_STRING = 'mongodb+srv://mjbaldwin:ImeuJHQ2JSCxhNHo@cluster0.whfui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(bodyParser({ extended: false })) // For parsing the body of a POST
  .use('/', routes)

mongoose
  .connect(CONNECTION_STRING)
  .then(result => {
   app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  })
  .catch(err => {
    console.log(err);
  });