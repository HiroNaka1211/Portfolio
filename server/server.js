//If write code in ts file, use import senytence instead of require
const express = require('express');
const path = require('path')
const app = express();
require("dotenv").config();

//port
const PORT = parseInt(process.env.PORT, 10) || 3000;

// console.log(path.join(__dirname, '../client/public'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" });
  });
  
  app.get('*', (req, res) => {
      res.render(path.join(__dirname,'../dist/index.html'));
  });
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})