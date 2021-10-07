const path = require('path');
const express = require('express');
const fs = require('fs');


exports.getProve03 = (req, res, next) => {
    res.render('./pages/proveActivities/prove03', {
      title: 'Prove Activity 03',
      path: '/prove03', // For pug, EJS
    });
  }
