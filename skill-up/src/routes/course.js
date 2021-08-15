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
// const date = require('date-and-time');
const { Course } = require("../models/Course");
const { Student } = require("../models/Student");
const { Instructor } = require("../models/Instructor");
const { Users } = require('../models/User');

const router = require("express").Router();

router.get("/api/courses", async (req, res) => {
    try {
        Course.find({} ,{'Lectures':0} , async (err ,courses)=>{
          if(!err)
          {
            console.log("router")
            const req_courses = await courses.map(async (course) => {
              console.log("single" ,course)
              await Users.find({} , (err , user)=>{
                console.log(typeof(user[0].id) , user[0].id , user[0]._id==course.instructor)
              })
              await Users.findOne({id:course.instructor} , (err, user)=>{
                console.log(err , user)
                if(!err && user!=null)
                  course["inst_name"] = user.name  
                  console.log("single" ,course)
                })
              return course
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

router.get("api/courses/:id", async (req, res) => {
    courseid = req.params.id
    try {
      //check authenticated
        // userid = req.user.id
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
          await User.findById(course.instructor , (err, user)=>{
            inst_name = user.name
          })
        })

        if (student || instructor)
        {
          res.send( {access : true, course : req_course, isInstructor , instructor :{name:inst_name} });
        }  
        else
          res.send ({access : false})

    } catch (e) {
      console.log(e);
    }
});

router.post("api/courses/:id", (req, res)=>{
    courseid = req.params.id
    try{
      //userid = req.user.id
        Instructor.find({userid} , (user , err) => {
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

