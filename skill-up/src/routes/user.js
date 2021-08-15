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


router.post("/role", async(req,res) =>{
  try{
  //   Users.find({}).toArray(function(err, docs) {
  //     console.log(JSON.stringify(docs));
  // });
    const user = await Users.find({uid:req.body._id});
    console.log(req.body);
    console.log(user);
    let tru = user[0].student;
    if(tru)
      res.send({"role":"student"});
    else
      res.send({"role":"instructor"});
  }
  catch(e){
    console.log(e);
  }
})

router.post("/user/get", async(req, res) => {
  let data = req.body;
  console.log(data);
  Users.findOne({uid: data.uid}, (err, user) => {
      if (err) {
          console.log('mongo error');
          res.status(400).send(`Error: ${err}`);
      } else if (user) {
          console.log(user);
          res.json(user);
      } else {
          console.log('user not found');
          res.status(404).send('User not found');
      }
  });
  // res.send('Got')
})

module.exports = router;
