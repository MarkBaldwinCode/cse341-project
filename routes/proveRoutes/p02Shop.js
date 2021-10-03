const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/p02Shop', {
      title: 'Prove Shop Page',
      path: '/p02Shop', // For pug, EJS
      activeTA03: true, // For HBS
      contentCSS: true, // For HBS
    })
});

module.exports = router;