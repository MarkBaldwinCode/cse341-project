const path = require('path');
const express = require('express');
const fs = require('fs');

//const taController = require('../../pages/teamActivities/ta02');

let newUsers = ['Nick'];



exports.getTA02 = (req, res, next) => {
  res.render('./pages/teamActivities/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    users: newUsers
  });
}

exports.postTA02addUser = (req, res, next) => {
    newUsers.push(req.body.userName);
    //console.log(req.body.userName);
    res.writeHead(302, { Location: '/teamActivities/02' });
    return res.end();
  };

exports.postTA02RemoveUser =  (req, res, next) => {
    newUsers = newUsers.filter(user => user !== req.body.removeUserName);
    res.writeHead(302, {Location: '/teamActivities/02'});
    return res.end();
  };




exports.getTA03 = (req, res, next) => {
  fs.readFile(path.join(__dirname, '..', '../../ta03.json'), 'utf8', (err, data) => {
    //Helps debug the error message
    if(err){
      console.error(err);
    }
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
      items: "",
      userSearchList: searchList
    });
  });
}

exports.getTA04 = (req, res, next) => {
  res.render('./pages/teamActivities/ta04', {
    title: 'Team Activity 04',
    path: '/ta04', // For pug, EJS
  });
}