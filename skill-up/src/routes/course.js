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

const router = require("express").Router();

router.get("/courses", async (req, res) => {
    try {
        Course.find({} ,{'Lectures':0} , async (err ,courses)=>{
          if(!err)
          {
            const req_courses = await courses.map(async (course) => {
              console.log("single" ,course)
              req_course = JSON.parse(JSON.stringify(course))
              await Users.find({} , (err , user)=>{
                console.log(typeof(user[0].uid) , user[0].uid , user[0].uid==course.uid)
              })
              await Users.findOne({uid:course.uid} , (err, user)=>{
                console.log(err , user)
                if(!err && user!=null)
                  req_course["inst_name"] = user.name  
                  console.log("single" ,req_course)
                })
              return req_course
            })
            console.log("courses" , req_courses)
            res.send(courses);
          }  
          else
            console.log(err)
        })
    } catch (e) {
        console.log(e);
    }
});

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

router.post("/addLecture", (req, res) => {
  console.log("here");
  console.log(req.body);

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  let message = req.body.title + ": \n " + req.body.content;

  client.messages
        .create({body: message, from: '+19282564538', to: '+917982559047'})
        .then(message => console.log(message))
        .catch(error => console.log("Twilio error \n" + erorr));


  res.send("received");
})

module.exports = router;

