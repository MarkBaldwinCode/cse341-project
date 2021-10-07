const path = require('path');
const express = require('express');
const fs = require('fs');


exports.getProve04 = (req, res, next) => {
    res.render('./pages/proveActivities/prove04', {
      title: 'Prove Activity 04',
      path: '/prove04', // For pug, EJS
    });
  }
