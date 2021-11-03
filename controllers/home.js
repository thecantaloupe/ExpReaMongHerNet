////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
// test route
router.get("/", (req, res) => {
    res.send("hello world")
})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;