/*const courses = [{
    title : "Course 1",
    instructor: "I1",
    intro:"welcome"
  },
  {
    title : "Course 1",
    instructor: "I1",
    intro:"welcome"
  },
  {
    title : "Course 1",
    instructor: "I1",
    intro:"welcome"
  },
  {
    title : "Course 1",
    instructor: "I1",
    intro:"welcome"
  }]*/
const date = require('date-and-time');
const { Course } = require("../models/Course");
const { Student } = require("../models/Student");
const { Instructor } = require("../models/Instructor");
const { Users } = require('../models/User');
const ObjectId = require("mongoose").ObjectId
const router = require("express").Router();




router.get("/courses/:id/:uid", async (req, res) => {
    courseid = req.params.id
    console.log(courseid)
    userid = req.params.uid
    try {
        isStudent = true
        isInstructor = false
        inst_name = ''
        req_course = {}

        await Student.find({uid :userid, cid : courseid} , (err ,user) => {
          if (user == null || err)
            isStudent = false
        })

        await Course.findById(courseid , async (err , course)=> {
          req_course = course
          await User.findById(course.uid , (err, user)=>{
            inst_name = user.name
          })
        })

        if(!student && !instructor)
        {
          req_courses["Lectures"] = [];
        }  
        console.log(course)
        res.send( {course : req_course, isInstructor , instructor :{name:inst_name} });


    } catch (e) {
      console.log(e);
    }
});

router.post("addLecture/:id/:uid", (req, res)=>{
    courseid = req.params.id
    userid = req.params.uid
    try{
      //userid = req.user.id
        Users.find({userid} , (user , err) => {
        if (user.id == Course.findbyId(courseid).instructor )
          newLec ={
            topic: req.body.topic,
            content: req.body.content,
            date : date.format(new Date(), 'ddd, MMM DD YYYY')
          }

          Course.updateOne({ id: courseid }, {
            $push: { Lectures : newLec}
          })
          .then(() => {
            res.redirect(`../courses/${courseid}`)
          });

      })
    } catch(e) {
      console.log(e)
    }

})

router.get("/courses", async (req, res) => {
  const courses = await Course.find({})
  // console.log(courses)
  let req_courses = []
  for (var course of courses) {
    req_course = JSON.parse(JSON.stringify(course))
    let user = await Users.findOne({uid : course.uid});
    req_course["inst_name"] = user.name;
    req_courses.push(req_course)
  }
  // const req_courses = await courses.map(async (course)=>{
  //   req_course = JSON.parse(JSON.stringify(course))
  //   let user = await Users.findOne({uid : course.uid});
  //   req_course["inst_name"] = user.name;
  //   return req_course;
  // })    
  console.log(req_courses)
  res.send(req_courses)            
});

router.post("/addLecture", async (req, res) => {
  console.log(req.body);
  cid = req.body.cid;
  uid = req.body.uid;
  let message = req.body.title + ": \n " + req.body.content;
  
  try{
    newLec ={
      topic: req.body.title,
      content: req.body.content,
      date : date.format(new Date(), 'ddd, MMM DD YYYY')
    }
    console.log((await Course.findOne({}))._id)
    await Course.updateOne({ _id: cid }, {
      $push: {Lectures : newLec}
    })
    let course = await Course.findOne({_id: cid});
    console.log(course);
    let coursetitle = course.title;
    
    let enrolledUsers = await Student.find({cid: cid});
    
    enrolledUsers.forEach(async (user) => {
      let stud = await Users.findOne({uid: user.uid});
      var pno = stud.pno;
      pno.replace(' ', '');
      // sendTwilioSMS(`(Course: ${coursetitle}) ${message}`, pno)
    })

    sendTwilioSMS("\n" + `(Course: ${coursetitle})` + "\n" + `${message}`, '+917982559047')
  } catch(e) {
    console.log(e)
  }

  


  res.send("received");
});

function sendTwilioSMS(message, pno) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  client.messages
        .create({body: message, from: '+19282564538', to: pno})
        .then(message => console.log(message))
        .catch(error => console.log("Twilio error \n" + erorr));
}

module.exports = router;

