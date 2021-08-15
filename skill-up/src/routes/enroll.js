const { Student } = require("../models/Student")
const router = require("express").Router();

router.post("/enroll",async (req, res) => {
  try {
      console.log(req.body);
    let student = await new Student(req.body);
    console.log(student);
    await student.save();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;