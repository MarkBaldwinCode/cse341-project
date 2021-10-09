const path = require('path');
const express = require('express');
const fs = require('fs');


// exports.getProve03 = (req, res, next) => {
//     res.render('./pages/proveActivities/prove03', {
//       title: 'Prove Activity 03',
//       path: '/prove03', // For pug, EJS
//     });
//   }


  exports.getProve03 = (req, res, next) => {
    fs.readFile(path.join(__dirname, '..', '../db/prove03.json'), 'utf8', (err, data) => {
      //Helps debug the error message
      if(err){
        console.error(err);
        console.log("My error is being hit")
      }
      //console.log("above req.query")
      //console.log(req.query);
  
      const searchList = req.query.searchList || "";
      //console.log("above the seachlist");
      //console.log(searchList);
      let items = JSON.parse(data).filter( item => {
        //console.log(item.name.includes(searchList));
       
        return item.name.includes(searchList);
      });
      //console.log(items);
  
      res.render('./pages/proveActivities/prove03', {
        title: 'Prove Activity 03',
        path: 'prove03', // For pug, EJS
        items,
        userSearchList: searchList
      });
    });
  }