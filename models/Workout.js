const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  Day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    exerciseType: {
      type: String,
      trim: true,
      required: "You must enter the type of exercise"
    }, 
    exerciseName: {
      type: String,
      trim: true,
      required: "You must enter an exercise."
    },
    exerciseDuration: {
      type: Number,
      required: "You must enter the duration of the exercise."
    }, 
    exerciseWeight: {
      type: Number
    },
    exerciseSets: {
      type: Number
    }, 
    exerciseReps: {
      type: Number
    },
    distanceTravelled: {
      type: Number
    }
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;