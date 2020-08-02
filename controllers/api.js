// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// ???

// Routes
// =============================================================
// TODO need POST route to create a workout

// TODO need GET route to get previous stats data for all workouts

// TODO need GET route to find data from most previous workout


// TODO need PUT route to update previous workout (find by id)
const db = require("../models");
const express=require("express")
const router = express.Router();



router.post("/api/create",function(req,res){
console.log(req.body);
    db.Workout.create({
        exerciseType :req.body.exerciseType,
        exerciseName: req.body.exerciseName,
        exerciseDuration : JSON.parse(req.body.exerciseDuration),
        exerciseReps :JSON.parse(req.body.exerciseReps)
    }).then(function(dbUser){
        console.log(dbUser);
        db.Workout.findByIdAndUpdate(dbUser._id,{
            $push:{
                exercises:{
                    exerciseType :req.body.exerciseType,
                    exerciseName: req.body.exerciseName,
                    exerciseDuration : JSON.parse(req.body.exerciseDuration),
                    exerciseReps :JSON.parse(req.body.exerciseReps)
                }
            }
        }).then(function(created){
            res.json(created)
        })
    }).catch(function(err){
        res.json(err)
    })
 
})



module.exports=router