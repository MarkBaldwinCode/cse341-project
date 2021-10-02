const path = require('path');
const express = require('express');
const router = express.Router();

const bookData = require('./add-products');

let newBooks = ['A Century of Flight'];

  router.get('/', (req, res, next) => {
    const books = bookData.books;
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