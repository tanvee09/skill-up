const { ObjectId } = require("mongodb");
const { Student } = require("../models/Student")
const router = require("express").Router();
const mongoose = require('mongoose');


router.post("/enroll",async (req, res) => {
  try {
      console.log(req.body);
    let student = await new Student({
      _id: new mongoose.Types.ObjectId(),
      uid:req.body.uid,
      cid:ObjectId(req.body.cid)
    });
    console.log(student);
    await student.save();
    res.send(student);
    // res.status(200).send('OK');
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;