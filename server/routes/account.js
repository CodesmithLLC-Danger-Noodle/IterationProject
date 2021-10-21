const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.put('/', 
  accountController.editBudget, 
  (req, res) => {
  res.status(200).json(res.locals.budget)  
  // { _id: 1, budget: 707 }
});

module.exports = router;

