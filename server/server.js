const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000; 
const transactionRouter = require('./routes/transactions');

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../public')));


//testing server
app.get('/', (req, res) => {
    console.log('Hello Patrick');
  });

//handle all requests for CRUD operations with transaction data
app.use('/api/transactions', transactionRouter);

//handle all requests for CRUD operations with user data
// app.use('/api/user', userRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));


//express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


//server listening on port 3000
// export app.listen as a variable instead of app
// 
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
module.exports = app; //server