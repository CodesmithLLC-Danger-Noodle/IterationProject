const path = require('path');
const db = require('../models/transactionsModel')
const accountController = {};


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
accountController.getBudget = (req, res, next) => {
    const getQuery = "SELECT * FROM account";
    db.query(getQuery)
      .then(data => {
          res.locals.budget = data.rows[0].budget;
          return next();
      })
      .catch(error => {
          return next(error);
      })

    
}

accountController.editBudget = (req, res, next) =>{
    // {budget: 12312}
  const values = [req.body.budget];
  // if budget doesn't exist in database
  const updateQuery = `UPDATE account SET budget = $1 WHERE _id = 1 RETURNING *`;
  db.query(updateQuery, values)
      .then(data => {
          // console.log(data);
          console.log("we are inside editBudget", data.rows);
          res.locals.budget = data.rows[0];
          return next();
      })
      .catch(error => {
          return next(error);
      })
}


module.exports = accountController;