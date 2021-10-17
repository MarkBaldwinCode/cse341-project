const path = require('path');
const express = require('express');
const fs = require('fs');
const Product = require('../../models/product');

exports.getEshopHome = (req, res, next) => {
  Product.fetchAll()
    .then(products => {

        res.render('pages/eShop/home', {
        pageTitle: 'E Shop Home Page',
        path: '/home',
        items: products,
        userSearchList: "" //searchList
      });
    })
    .catch(err => {
      console.log(err);
    });

  //for search features
  //const searchList = req.query.searchList || "";
  //let items = JSON.parse(data).filter(item => {
    //return item.title.includes(searchList);
  //});
}



exports.postAddProducts = (req, res, next) => {
  const id = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const author = req.body.author;
  const type = req.body.type;
  const imageUrl = req.body.imageUrl;
  const inCart = req.body.inCart;
  const category = req.body.category;


  const product = new Product(
    id,
    title,
    description,
    price,
    author,
    type,
    imageUrl,
    inCart,
    category);

  product
    .save()
    .then(result => {
      console.log('Created Product');
      res.redirect('/eShop');
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

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  console.log(prodId);
  
  Product.findById(prodId)
  .then( product => {
    console.log('Hitting getProduct');
    console.log(product);
  });
  res.redirect('/');
}