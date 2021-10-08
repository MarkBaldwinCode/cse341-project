const path = require('path');
const express = require('express');
const fs = require('fs');

const books = [];

  exports.getProve02 =  (req, res, next) => {
    res.render('./pages/proveActivities/prove02AddProduct', {
      title: 'Prove Activity 02 Add Product',
      path: '/prove02AddProduct', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
      books: books
    })
}

exports.postAddBook = (req, res, next) => {
    console.log(req.body);
    books.push({title: req.body.title});
    console.log(books);
    res.redirect('/proveActivities/prove02Shop');
  };

 exports.postRemoveBook = (req, res, next) => {
    books = books.filter(book => book !== req.body.removeBook);
    return res.end(); 
  };


