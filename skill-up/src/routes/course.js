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

router.get("/api/courses", async (req, res) => {
    try {
        Course.find({} ,{'Lectures':0} , async (courses,err)=>{
          if(!err)
          {
            console.log("courses" , courses)
            await courses.map(async (course) => {
              inst_name = ''
              await Instructor.findById(course.instructor , (userid , err)=>{
                User.findById(userid , (user,err)=>{
                   inst_name = user.name
                })
              })
              course['inst_name'] = inst_name
              return course
            })
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
        isStudent = false
        isInstructor = false
        await Student.find({userid} , (user , err) => {
          if (courseid in user.enrolled)
            isStudent = true
        })

        await Instructor.find({userid} , (user , err) => {
          if (user.id == Course.findbyId(courseid).instructor )
            isInstructor =  true
        })

        if (student || instructor)
        {
          inst_name = '' 
          inst_img = ''
          course = {}
          await Course.findbyId(courseid , (result, err)=>{
            course = result
            Users.findById(course.instructor , (user,err) => {
              inst_name = user.name
            })
          })
          res.send( {access : false, course : course, isInstructor , instructor :{name:inst_name} });
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

module.exports = router;

