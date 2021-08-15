const { Course } = require("../models/Course")
const { Student } = require("../models/Student")
const router = require("express").Router();

router.post("/getenrolled",async (req, res) => {
  try {
      console.log(req.body);
    let courseIds = await Student.find({uid:req.body.uid});
    console.log(courseIds);
    // res.send(courses);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;