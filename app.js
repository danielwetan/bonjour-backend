const express = require('express');
require('dotenv').config();
const connection = require('./src/helpers/mysql');
const bodyParser = require('body-parser');
const routes = require('./src/routes/');
const app = express();

connection.connect((err) => {
  if (err) throw err;
  console.log('Database has connected');
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`App listen on port ${PORT}`)})