const path = require('path');
const express = require('express');
const fs = require('fs');
const Product = require('../../models/product');

exports.getEshopHome = (req, res, next) => {
  fs.readFile(path.join(__dirname, '..', '../db/prove03.json'), 'utf8', (err, data) => {
    //Helps debug the error message
    if (err) {
      console.error(err);
      console.log("My error is being hit")
    }
    //for search features
    const searchList = req.query.searchList || "";
    let items = JSON.parse(data).filter(item => {
      return item.name.includes(searchList);
    });

    res.render('pages/eShop/home', {
      pageTitle: 'E Shop Home Page',
      path: '/home',
      items,
      userSearchList: searchList
    });
  })
}

exports.postAddProducts = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, price, description, imageUrl);

  product
    .save()
    .then(result => {
      console.log('Created Product');
      res.redirect('pages/eShop/home');
    })

}


exports.getAddProducts = (req, res, next) => {
  res.render('pages/eShop/add-products', {
    pageTitle: 'E Shop Admin Add Product',
    path: '/add-products'
  });
}

exports.getCart = (req, res, next) => {
  res.render('pages/eShop/cart', {
    pageTitle: 'Your E Shop Cart',
    path: '/cart'
  });
}