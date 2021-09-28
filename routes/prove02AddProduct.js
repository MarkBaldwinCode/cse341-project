const path = require('path');
const express = require('express');
const router = express.Router();

let newBooks = ['A Century of Flight'];

router.get('/', (req, res, next) => {
  res.render('pages/prove02AddProduct', {
    title: 'Prove Activity 02 Add Product',
    path: '/prove02AddProduct', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    books: newBooks
  })

  router.post('/addBook', (req, res, next) => {
    console.log(req.body);
    newBooks.push({title: req.body.bookName});
    res.redirect('/prove02Shop');
  })

  router.post('/removeBook', (req, res, next) => {
    newBooks = newBooks.filter(book => book !== req.body.removeBook);
    return res.end(); 
  })
  
});

module.exports = router;
module.newBooks = newBooks;