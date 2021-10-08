const path = require('path');
const express = require('express');
const router = express.Router();

const prove02Controller = require('../../controllers/proveControllers/prove02');

router.get('/', prove02Controller.getProve02);
router.post('/addBook', prove02Controller.postAddBook);
router.post('/removeBook', prove02Controller.postRemoveBook);


// //Test router with a get request
//   router.get('/addBook', (req, res, next) =>{
//     res.send('a string');
//   })

module.exports = router;
