// Our initial setup (package requires, port number setup)
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000; // So we can run on heroku || (OR) localhost:5000

const app = express();

// Route setup. You can implement more in the future!
const routes = require('./routes');

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(bodyParser({ extended: false })) // For parsing the body of a POST
  .use('/', routes)
  /*.use('/ta01', ta01Routes)
  .use('/ta02', ta02Routes)
  .use('/ta03', ta03Routes)
  .use('/ta04', ta04Routes)
  .use('/prove02AddProduct', prove02AddProductRoutes)
  .use('/p02Shop', p02ShopRoutes)
  .use('/prove02Shop', prove02ShopRoutes)*/
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
