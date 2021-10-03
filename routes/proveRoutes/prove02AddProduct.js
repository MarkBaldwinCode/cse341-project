const path = require('path');
const express = require('express');
const router = express.Router();

const newBooks = [];

router.get('/', (req, res, next) => {
  res.render('./pages/proveActivities/prove02AddProduct', {
    title: 'Prove Activity 02 Add Product',
    path: '/prove02AddProduct', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    books: newBooks
  })

  router.get('/addBook', (req, res, next) =>{
    res.send('a string');
  })

  router.post('/addBook', (req, res, next) => {
    console.log(req.body);
    newBooks.push({title: req.body.title});
    console.log(newBooks);
    res.redirect('/proveActivities/prove02Shop');
  })

  router.post('/removeBook', (req, res, next) => {
    newBooks = newBooks.filter(book => book !== req.body.removeBook);
    return res.end(); 
  })
  
});

module.exports = router;
module.newBooks = newBooks;
global.testBooks = newBooks;