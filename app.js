const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect.js');
require('dotenv').config();
const http = require("http");
const server = http.createServer(app);
//middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks',tasks);
const port = process.env.PORT || 3000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      server.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
start();


 
 