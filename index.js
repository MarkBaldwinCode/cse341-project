// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');


const routes = require('./routes');
const User = require('./models/user');
const CONNECTION_STRING = 'mongodb+srv://mjbaldwin:ImeuJHQ2JSCxhNHo@cluster0.whfui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000; // So we can run on heroku || (OR) localhost:5000


const app = express();
const store = new MongoDBStore({
  uri: CONNECTION_STRING,
  collection: 'sessions'
});

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(bodyParser({ extended: false })) // For parsing the body of a POST
  .use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false,
      store: store
    })
  )
  .use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    User.findById(req.session.user._id)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  })
  .use('/', routes);



mongoose
  .connect(CONNECTION_STRING)
  .then(result => {   
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  })
  .catch(err => {
    console.log(err);
  });