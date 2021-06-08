const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 3000

const app = express();
// static files -> look for static requests in public folder

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static("public"));
app.use(htmlRoutes);
app.use(apiRoutes);



// db connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  app.use(htmlRoutes);
  app.use(apiRoutes);

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  })