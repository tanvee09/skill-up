const {Users} = require("../models/User");
const router = require("express").Router();

router.post("/user", async (req, res) => {
  try {
    let user = await new Users(req.body);
    console.log(user);
    await user.save();
    res.send(user);
  } catch (e) {
    // console.log(e);
  }
});


module.exports = router;
