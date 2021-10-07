//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const taController = require('../../controllers/taControllers/ta');

router.get('/addUser', (req, res, next) =>{
  res.send('Cats!');
})

router.post('/addUser', taController.postTA02addUser);

router.post('/removeUser', taController.postTA02RemoveUser);

router.get('/', taController.getTA02);

module.exports = router;
