const express = require("express");
const Number_model = require("./models/numbers")
const Number_route = require("./routes/numbers")
// const mongoose = require("mongoose")
const connectToDatabase = require("./db")
const cors = require('cors');
const { urlencoded } = require("body-parser");

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

app.use('/api/numbers', Number_route)

connectToDatabase();

// const insert = async ()=>{
//   await Number_model.insertMany({
//     id : 1,
//     phone_number : "7222976616"
//   })
// }
// insert();

app.get('/', (req,res)=>{ 
  res.send("Hi I am liver")
})

app.listen(port, () => {
  console.log("App Running Successfully");
});
