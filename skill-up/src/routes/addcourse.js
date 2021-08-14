const { Course } = require("../models/Course")
const router = require("express").Router();

router.post("/addcourse", async (req, res) => {
  try {
      console.log(req.body);
    let course = await new Course(req.body);
    console.log(course);
    await course.save();
    res.send(course);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;