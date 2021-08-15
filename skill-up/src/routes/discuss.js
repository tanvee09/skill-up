const router = require("express").Router();
let {DiscussPost} = require('../models/DiscussPost');
let {Users} = require('../models/User');
let {Comment} = require('../models/Comment');
const { PromiseProvider } = require("mongoose");

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

router.post('/add/comment', async (req, res) => {
  console.log(req.body);
  let {cid, comment, uid, pid} = req.body;
  try {
    let user = await Users.findOne({uid:uid});
    const newcommentobj = {
      author: user.name,
      uid: uid,
      date: new Date(),
      content: comment,
      post: pid
    }
    let newcomment = await new Comment(newcommentobj);
    await newcomment.save()
    res.send(newcomment);
  } catch(err) {
    console.log(err);
    res.status(400).send("error");
  }
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

router.post('/getcomments', async (req, res) => {
  let pid = req.body.pid;
  try {
    let posts = await Comment.find({post: pid});
    console.log(posts);
    res.send(posts);
  } catch (err) {
    console.log(err);
    res.status(400).send("error");
  }
})

router.post('/getpost', async (req, res) => {
  let pid = req.body.pid;
  let uid = req.body.uid;
  try {
    let posts = await DiscussPost.findById(pid);
    console.log(posts);
    let user = await Users.findOne({uid:uid})
    res.send({post: posts, username: user.name});
  } catch (err) {
    console.log(err);
    res.status(400).send("error");
  }
})



module.exports = router;