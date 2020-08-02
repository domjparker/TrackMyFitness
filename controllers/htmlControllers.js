const express = require("express");
const router = express.Router();

const db = require("../models");

// GET route to server our 

router.get("/", function(req,res) {
    db.Workout.find({}).then(function(data) {
        res.json(data[data.length -1])
       // res.render("index",{})
    })
})
module.exports=router