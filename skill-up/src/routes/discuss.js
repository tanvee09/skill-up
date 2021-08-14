const router = require("express").Router();

router.post('/add/post', (req, res) => {
  console.log(req.body);
  res.send("received post");
});

router.post('/add/comment', (req, res) => {
  console.log(req.body);
  res.send("received comment");
});

module.exports = router;