const path = require('path');
const express = require('express');
const fs = require('fs');

//const taController = require('../../pages/teamActivities/ta03');


exports.getTA03 = (req, res, next) => {
    fs.readFile(path.join(__dirname, '..', '../../ta03.json'), 'utf8' , (err, data) => {
      
      console.log(req.query);
  
      let searchList = req.query.searchList || "";
  
      console.log(searchList);
      // let items = JSON.parse(data).filter( item => {
      //   console.log(item.name.includes(searchList));
      //   return item.name.includes(searchList);
      //});
  
        res.render('./pages/teamActivities/ta03', {
          title: 'Team Activity 03',
          path: '/ta03', // For pug, EJS
          activeTA03: true, // For HBS
          contentCSS: true, // For HBS
          items: "",
          userSearchList: searchList
        });
      });
    }