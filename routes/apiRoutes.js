const router = require("express").Router();
const Workout = require("../models/workout.js");



    // api routing
    router.get("/api/workouts", (req, res) => {
        // returns array

        Workout.find({})
        .then((dbWorkout)=>{
            console.log(dbWorkout);
            res.json(dbWorkout)}) 
        .catch(console.error);
    });

         // returns json
        // accepts json  
    router.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}})
        .then(res.json)
        .catch(console.error);

    });
    // accepts json
        // returns json
    router.post("/api/workouts/", (req, res) => {
        
        // create NEW workout
        Workout.create({})
        .then(res.json)
        .catch(console.error);
    });

     // returns json
    router.get("/api/workouts/range", (req, res) => {
        Workout.find({}).limit(7)
        .then((dbWorkout)=>{
            console.log(dbWorkout);
            res.json(dbWorkout)})
        .catch(console.error);
    });
module.exports=router