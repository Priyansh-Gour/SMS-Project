const express = require("express");
const Number_Model = require("../models/Numbers.js");

const router = express.Router();

router.get("/getnumbers", async (req, res) => {
  try {
    let users = await Number_Model.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/createnumber", async (req, res) => {
  try {
    let existingNum = await Number_Model.findOne({phone_number:req.body.phone_number});
    if (existingNum) {
      res.status(400).send({msg:"Number already existed."});
    }
    else if(req.body.phone_number < 999999999 || req.body.phone_number > 9999999999){
        res.status(400).send({msg : "Invalid Number. Please Enter a valid number."});
    }
    else{
        const newUser = new Number_Model({
            name: req.body.name,
            phone_number: req.body.phone_number
        })
        await newUser.save();
        res.status(200).send({msg:"Number saved successfully."})
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
