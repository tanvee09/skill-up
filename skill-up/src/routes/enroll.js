const { ObjectID } = require("mongodb");
const { Student } = require("../models/Student")
const router = require("express").Router();

router.post("/enroll",async (req, res) => {
  try {
      console.log(req.body);
    let student = await new Student({uid:req.body.uid,cid:ObjectID(req.body.cid)});
    console.log(student);
    await student.save();
    res.status(200).send('OK');
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;