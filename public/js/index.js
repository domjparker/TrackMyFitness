console.log("testing connect");

const type=$("#type")
const duration=$("#duration")
const reps=$("#reps")
const name= $("#name")
const saveBtn=$("#saveBtn")


saveBtn.click(function(event){
    const myObjectToSave={
    exerciseType :type.val(),
    exerciseName: name.val(),
    exerciseDuration : duration.val(),
    exerciseReps :reps.val()
    }

    $.ajax("/api/create",{
        type: "POST",
        data: myObjectToSave
    }).then(function(res){
        console.log(res);
    })

})





// TODO when page opens, display GET previous workout data (if any) and listen for "Create Workout" and "Update Workout" button click events.


// TODO user clicks "Create Workout" button, redirect to workout.html, listen for choice of type of exercise (cardio or resistance)

// TODO if user clicks "cardio" render cardio input form. 

// TODO If user clicks "resistance", render resistance input form.