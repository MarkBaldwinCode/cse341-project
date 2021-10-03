//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

let newUsers = ['Nick'];

router.get('/', (req, res, next) => {
  res.render('./pages/teamActivities/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: newUsers
  });
});

  router.post('/addUser', (req, res, next) => {
    newUsers.push(req.body.userName);
    //console.log(req.body.userName);
    res.writeHead(302, {Location: '/ta02'});
    return res.end();
  })

  router.post('/removeUser', (req, res, next) => {
    newUsers = newUsers.filter(user => user !== req.body.removeUserName);
    res.writeHead(302, {Location: '/ta02'});
    return res.end();
  })

module.exports = router;
