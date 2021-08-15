import React, {useState, useEffect} from 'react';
import CoursePreview from './CoursePreview';
import {Container, Form , Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useAuth} from "../../contexts/AuthContext";
import './../../css/course/courseList.css';

 export default function CourseList(props) {
     
    const {currentUser} = useAuth()

    function limitText(text, len) {
        if (text.length > len) 
            return text.substring(0, len);
        else    
            return text;
    }

    const [courses, setcourses] = useState([]);
     const [arr, setarr] = useState([]);

     useEffect(async () => {
         const uid = currentUser.uid
         console.log("from component did mount");
         await fetch(`/courses`)
         .then(response => {
             console.log("resp", response);
             response.json().then(c => { 
                 setcourses(c);

                const a = c.map( (course) =>{ 
                        return(
                            <Link to={`/courses/${course._id}`} key={course._id}>
                                <CoursePreview uid={course.id} title={limitText(course.title, 30)} instructor={limitText(course.inst_name, 15)} intro={limitText(course.introduction, 30)} enrolled={course.numEnrolled} iid={course.uid} />
                            </Link>
                        )
                });
        
                setarr(a);
            })
         })

         
        
     }, [])

     function handleInput(e) {
         let text = e.target.value.toLowerCase();
         console.log(text, courses)
         const filtered = courses.filter((course) => {
             return (
                 course.title.toLowerCase().includes(text) || course.inst_name.toLowerCase().includes(text) 
             )
         })

         const a = filtered.map( (course) =>{ 
                 return(
                     <Link to={`/courses/${course._id}`} key={course._id}>
                         <CoursePreview uid={course.id} title={course.title} instructor={course.inst_name} intro={course.introduction} enrolled={course.numEnrolled} iid={course.uid} />
                     </Link>
                 )
         });

         setarr(a);
     }

     return (<div>
         <Container id="post-box" className = "courseList">
             <Navbar id="discussion-heading" className="justify-content-between">
                 <h1 class="navbar-brand"><strong>Courses</strong></h1>
                 <Nav>
                 <Form className="form-inline">
                     <Form.Control className="mr-sm-2" type="search" placeholder="Search" aria-label="Search" onInput={handleInput}/>
                     <button className="btn discussion-btn" type="submit">Search</button>
                 </Form>
                 </Nav>
             </Navbar>
             {arr}
         </Container>
     </div>)
 }




// import React from 'react';
// import CoursePreview from './CoursePreview';
// import {Container, Form , Navbar, Nav} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
// import {useAuth} from "../../contexts/AuthContext";


// class CourseList extends React.Component{
//     constructor (props) {
//         super(props)
//         this.state = {
//             courses : [],
//             searchField : ''
//         }
//     }

//     searchChange=  (event/6117f7c91a31655f781d0a61

//     async componentDidMount(){
//         //const {currentUser} = useAuth()
//         console.log("from component did mount");
//         await fetch('/courses')
//         .then(response => {
//             console.log("resp", response);
//             response.json().then(courses => this.setState({courses : courses})
//         )})
//     }

//     render() {
//         const {courses ,searchField } = this.state
//         console.log("InRender", courses)
//         const filtered = courses.filter((course) => {
//             return (
//                 course.title.toLowerCase().includes(searchField) || course.inst_name.toLowerCase.includes(searchField) 
//             )
//         })

//         const arr = filtered.map( (course) =>{ 
//                 return(
//                     <Link to={`/courses/${course._id}`}>
//                         <CoursePreview uid={course.id} title={course.title} instructor={course.inst_name} intro={course.introduction} enrolled={course.numEnrolled} iid={course.uid} />
//                     </Link>
//                 )
//         });

//         console.log(filtered , arr, courses , "render")

//         return (<div>
//             <Container id="post-box">
//                 <Navbar id="discussion-heading" className="justify-content-between">
//                     <h1 class="navbar-brand"><strong>Courses</strong></h1>
//                     <Nav>
//                     <Form className="form-inline">
//                         <Form.Control className="mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//                         <button className="btn discussion-btn" type="submit">Search</button>
//                     </Form>
//                     </Nav>
//                 </Navbar>
//                 {arr}
//             </Container>
//         </div>)
//     }
// }
// export default CourseList;
