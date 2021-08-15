const router = require("express").Router();
let {DiscussPost} = require('../models/DiscussPost');
let {Course} = require('../models/Course');
let {Users} = require('../models/User');

router.post('/course/:id/add/post', async (req, res) => {
  console.log(req.body);
  let {cid, title, content, uid, _id} = req.body;
  try {
    let user = await Users.findOne({uid:uid});
    const newpostobj = {
      author: user.name,
      uid: uid,
      date: new Date(),
      content: content,
      title: title,
      cid: cid
    }
    let newpost = await new DiscussPost(newpostobj);
    await newpost.save()
    res.send(newpostobj);
  } catch(err) {
    console.log(err);
    res.status(400).send("error");
  }
});

router.post('/add/comment', (req, res) => {
  console.log(req.body);
  res.send("received comment");
});

router.post('/course/:id/getposts', async (req, res) => {
  let courseid = req.body.cid;
  try {
    let posts = await DiscussPost.find({cid: courseid});
    console.log(posts);
    res.send(posts);
  } catch (err) {
    console.log(err);
    res.status(400).send("error");
  }
})

module.exports = router;

//6117f7c91a31655f781d0a61