const path = require('path');
const express = require('express');
const router = express.Router();

const newBooks = require('./prove02AddProduct');

  router.get('/', (req, res, next) => {
    const books = newBooks.books;
    console.log(books);
    res.render('pages/prove02Shop', {
        bks: books, 
        docTitle: 'prove02Shop', 
        path:'/prove02Shop', 
        //hasProducts: books.length > 0,
        activeShop: true,
        productCSS:true
    });
  })

module.exports = router;