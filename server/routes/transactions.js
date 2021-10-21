const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');



//for displaying totals for transactions/summary data
router.get('/', 
    transactionController.getTransaction, 
    transactionController.getTotal, 
    (req, res) => {
    // console.log(res.locals);
    res.status(200).json({...res.locals});
    // getting error: Express error handler caught unknown middleware error
    // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // maybe because res.locals needs to be an array, but getting an object right now
});

//on 'submit' add transaction to database
router.post('/', 
    transactionController.addTransaction, 
    transactionController.getTransaction, 
    transactionController.getTotal, (req, res) => {
    //if re-rendering entire page everytime we add transaction, need to add getTransaction middleware
    //else if just updating that one thing, keep only addTransaction middleware (gives only single transaction)
    //data is everything returned from the insert query to the DB
    console.log('THIS IS THE RES.LOCALS', res.locals);
    return res.status(200).json({...res.locals});
});

//on 'edit', find and update an existing transaction 
router.put('/', 
    //middleware edit transaction
    transactionController.editTransaction,
    //middleware get Transactions
    transactionController.getTransaction,
    //middleware get total
    transactionController.getTotal,
    //return response
    (req, res) => {
        return res.status(200).json({...res.locals})
});

//on 'delete' find and delete an existing transaction
router.delete('/', 
    transactionController.deleteTransaction,
    transactionController.getTransaction,
    transactionController.getTotal,
    (req, res) => {
        return res.status(200).json({...res.locals})
});


module.exports = router;