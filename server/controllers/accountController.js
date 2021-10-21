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

accountController.editBudget = (req, res, next) =>{
  console.log('hi~!, we are here!', req.body);
  // const addTransQuery = `INSERT INTO public.transactions (name, amount, date, category_id) VALUES ($1, $2, $3, $4) RETURNING *`; 
  

  // const updateQueryText = `UPDATE public.transactions SET ${column} = '${change}' WHERE _id = '${specificRow}';`;

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