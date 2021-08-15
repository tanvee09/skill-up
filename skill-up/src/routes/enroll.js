const { ObjectId } = require("mongodb");
const { Student } = require("../models/Student")
const router = require("express").Router();
const mongoose = require('mongoose');
const { Course } = require("../models/Course");


router.post("/enroll",async (req, res) => {
  try {
      console.log(req.body);
      let student = await new Student({
        _id: new mongoose.Types.ObjectId(),
        uid:req.body.uid,
        cid:ObjectId(req.body.cid)
      });
      let course = await Course.findById(req.body.cid);
      let nums = course.numEnrolled + 1;
      await Course.updateOne({ _id: req.body.cid }, {
        $set: { numEnrolled : nums}
      })
      console.log(student);
      await student.save();
      res.send(student);
    // res.status(200).send('OK');
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;