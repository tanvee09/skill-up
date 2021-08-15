const { Course } = require("../models/Course")
const { Student } = require("../models/Student")
const router = require("express").Router();

router.post("/getenrolled",async (req, res) => {
  try {
      console.log(req.body);
    let courseIds = await Student.find({uid:req.body.uid});
    // console.log(courseIds);
    let response = [];
    for(var course of courseIds){
      let cur = await Course.findById(course.cid);
      console.log(cur);
      response.push(cur);
    }
    // console.log("Response",response);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;