const { Course } = require("../models/Course")
const router = require("express").Router();

router.post("/getinstrcourse",async (req, res) => {
  try {
      console.log(req.body);
    let courses = [];
    courses = await Course.find({uid:req.body.uid});
    console.log(courses);
    res.send(courses);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;