const mongoose  = require("mongoose")
const { Users } = require("./src/models/User.js")
const { Course } = require("./src/models/Course.js")

mongoose.connect('mongodb://localhost:27017/skillUp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
        Users.deleteMany({}).then(
            Users.insertMany({
                name: "Kopal",
                email: "kopal@KADT.com",
                phoneNo : "+91 00000000"
            })
        )
        Course.deleteMany({}).then((err, result) => {
            Users.find({ name: "Kopal" }).then((userone) => {
                var id = userone[0]._id;
                console.log(userone, userone[0]._id, id);
                Course.insertMany([{
                    title: 'Maths',
                    instructor: id ,
                    introduction: 'welcome',
                    Lectures : [
                        { "title" : "l1", "date" : "3 August 2021", "content" : "maths is fun" }
                    ]
                }])
            })
        })
           
        })
        .catch(err => {
            console.log("MONGO CONNECTION ERROR");
            console.log(err);
        })