
// const path = require('path');
// const db = require('../models/transactionsModel')
// const userController = {};


//MIDDLEWARE TO ADD USERNAME AND PASSWORD TO DATABASE

// userController.createUser = (req, res, next) => {
//     const addUserQuery = 'INSERT INTO public.user (username, password) VALUES ($1, $2) RETURNING *';
//     const values = [req.body.username, req.body.password]
//     console.log('username info', typeof req.body.username);
//     console.log('username info', typeof req.body.password);
//     db.query(addUserQuery, values)
//         .then(data => {
//             return next();
//         })
//         .catch( err => {
//             console.log('query error', err);
//             return next(err);
//         });
// };

// module.exports = userController;