const express = require('express');
require('dotenv').config();
const connection = require('./src/helpers/mysql');
const bodyParser = require('body-parser');
const routes = require('./src/routes/');
const morgan = require('morgan');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

connection.connect((err) => {
  if (err) throw err;
  console.log('Database has connected');
})

io.on('connection', socket => {
  console.log('a user connected!');
  socket.on('chat-message', msg => {
    console.log(msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(express.static('src/assets/'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  req.io = io;
  next();
})
app.use('/', routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {console.log(`App listen on port ${PORT}`)})
