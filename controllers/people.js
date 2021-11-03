////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const People = require("../models/people");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

///////////////////////////////////////
// router middleware
///////////////////////////////////////
router.use(express.json())

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
// Index Route - get request to /people
// get us all the peoples
router.get("/", async (req, res) => {
    try {
        // send all the peoples
        res.json(await People.find({}))
    } catch (error) {
        // send error
        res.status(400).json({error})
    }
})
// destroy route - delete request to /people/:id
// delete a specific people
router.delete("/:id", async (req, res) => {
    try {
      res.json(await People.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json({ error });
    }
  });
// update route - put request to /people/:id
// update a specified person
router.put("/:id", async (req, res) => {
    try {
        res.json(
            await People.findByIdAndUpdate(req.params.id, req.body, {new: true})
        )
    } catch (error){
        res.status(400).json({error})
    }
})
// Create Route - post request to /people
// create a person from JSON body
router.post("/", async (req, res) => {
    try {
        // create a new people
        res.json(await People.create(req.body))
    } catch (error){
        //send error
        res.status(400).json({error})
    }
})
// Show Route - return a single toad
// get request to /toads/:id
router.get("/:id", async (req, res) => {
    // get the id
    const id = req.params.id
    // get the toad from database
    const people = await People.findById(id)
    // return the toad
    res.json(people)
})
//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;