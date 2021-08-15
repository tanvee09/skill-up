const { Student } = require("../models/Student")
const router = require("express").Router();

router.post("/enroll",async (req, res) => {
  try {
      console.log('enroll', req.body);
      let students = await Student.find()
      console.log(students)
      let student = await new Student(req.body);
      console.log(student);
      await student.save();
      res.status(200).send('OK');
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;