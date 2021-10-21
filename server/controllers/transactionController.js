const path = require('path');
const { nextTick } = require('process');
const db = require('../models/transactionsModel')
const transactionController = {};

//middleware goes here to handle db queries

//MIDDLEWARE TO UPDATE A TRANSACTION IN THE DB
transactionController.editTransaction = (req, res, next) => {
    console.log('in edit', typeof req.body.payload);
    const column = req.body.type;
    let change = req.body.payload;
    const specificRow = req.body.id;
    const catList = {
        'Housing/Rent': '2', 
        'Utilities': '3', 
        'Gas': '4', 
        'Groceries': '5', 
        'Dining Out': '6', 
        'Drinks': '7', 
        'Entertainment': '8', 
        'Savings': '9', 
        'Other': '10'
    };
    if(column === 'category') {
        change = catList[change];
    }
    console.log(change);

    const updateQueryText = `UPDATE public.transactions SET ${column} = '${change}' WHERE _id = '${specificRow}';`;

    db.query(updateQueryText)
        .then(data => {
            console.log(data);
            return next();
        })
        .catch(error => {
            return next(error);
        })
}

//MIDDLEWARE TO ADD A TRANSACTION TO DB
transactionController.addTransaction = (req, res, next) => {
    
    //req.body is going to contain transaction name, amount, and category
    const addTransQuery = `INSERT INTO public.transactions (name, amount, date, category_id) VALUES ($1, $2, $3, $4) RETURNING *`; 
    const values = [req.body.name, req.body.amount, req.body.date, req.body.category_id]
    // console.log(addTransQuery);
    console.log('amount type: ', typeof req.body.amount);
    // console.log(values);

    db.query(addTransQuery, values)
        .then(data => {
            // console.log('rows:', data.rows);
            // res.locals.data = data.rows[0]; // might be data.rows
            return next();
        })
        .catch( err => {
            console.log('query error', err);
            return next(err);
        });
};

//MIDDLEWARE FOR RETRIEVING TRANSACTION DATA FOR FRONTEND DISPLAY
transactionController.getTransaction = (req, res, next) => {
    const getTransQuery = `SELECT transactions.*, categories.category as category 
    FROM transactions 
    LEFT OUTER JOIN categories ON categories._id = transactions.category_id`;
    db.query(getTransQuery)
        .then(data => {
            // console.log(data.rows);
            res.locals.data = data.rows;
            return next();
        })
        .catch(err => {
            console.log('get query error', err);
            return next(err);
        });
};

//MIDDLEWARE FOR DELETING A TRANSACTION
transactionController.deleteTransaction = (req, res, next) => {
    const deleteQuery = `DELETE FROM transactions WHERE _id=${req.body.id}`;
    // console.log(req.body.id)
    //receive transaction_id from the request on req.body.id
    
    db.query(deleteQuery)
        .then(data => {
            // console.log(data)
            return next();
        })
            .catch(err => {
            console.log('delete error', err);
            return next(err);
        })
};

//MIDDLEWARE FOR CALCULATING RUNNING TOTAL OF TRANSACTIONS
transactionController.getTotal = (req, res, next) => {
    //res.locals.data should have all our transactions
    const transactions = res.locals.data;
    let total = 0;
        
    transactions.forEach( obj => {
        total += Number(obj.amount);
        
    })

    res.locals.total = total;
    return next();
};



module.exports = transactionController;