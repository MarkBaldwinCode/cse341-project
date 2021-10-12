const path = require('path');
const express = require('express');
const fs = require('fs');

exports.getEshopHome = (req, res, next) => {
    fs.readFile(path.join(__dirname, '..', '../db/prove03.json'), 'utf8', (err, data) => {
        //Helps debug the error message
        if(err){
          console.error(err);
          console.log("My error is being hit")
        }
        //console.log("above req.query")
        //console.log(req.query);
    
        //for search features
        const searchList = req.query.searchList || "";
        //console.log("above the seachlist");
        //console.log(searchList);
        let items = JSON.parse(data).filter( item => {
          //console.log(item.name.includes(searchList));
            //console.log(items);
          return item.name.includes(searchList);
        });
        //console.log(items);
    
        res.render('pages/eShop/home', {
            pageTitle: 'E Shop Home Page',
            path: '/home',
            items,
            userSearchList: searchList
        });
    })
}

  
exports.getAddProducts = (req, res, next) => {
    res.render('pages/eShop/add-products', {
        pageTitle: 'E Shop Admin Add Product',
        path: '/add-products'});
  }

  exports.getCart = (req, res, next) => {
    res.render('pages/eShop/cart', {
        pageTitle: 'Your E Shop Cart',
        path: '/cart'});
  }