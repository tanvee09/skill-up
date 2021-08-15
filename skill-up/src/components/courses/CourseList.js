import React, {useState, useEffect} from 'react';
import CoursePreview from './CoursePreview';
import {Container, Form , Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useAuth} from "../../contexts/AuthContext";


// export default function CourseList(props) {
//     const [courses, setcourses] = useState([]);
//     const [arr, setarr] = useState([]);

//     useEffect(async () => {
//         console.log("from component did mount");
//         await fetch('/courses')
//         .then(response => {
//             console.log("resp", response);
//             response.json().then(c => setcourses(c))
//         })
        
//     }, [])

//     function handleInput(e) {
//         let text = e.target.value.toLowerCase();

//         const filtered = courses.filter((course) => {
//             return (
//                 course.title.toLowerCase().includes(text) || course.inst_name.toLowerCase.includes(text) 
//             )
//         })

//         const a = filtered.map( (course) =>{ 
//                 return(
//                     <Link to={`/courses/${course._id}`}>
//                         <CoursePreview uid={course.id} title={course.title} instructor={course.inst_name} intro={course.introduction} enrolled={course.numEnrolled} iid={course.uid} />
//                     </Link>
//                 )
//         });

//         setarr(a);
//     }

//     return (<div>
//         <Container id="post-box">
//             <Navbar id="discussion-heading" className="justify-content-between">
//                 <h1 class="navbar-brand"><strong>Courses</strong></h1>
//                 <Nav>
//                 <Form className="form-inline">
//                     <Form.Control className="mr-sm-2" type="search" placeholder="Search" aria-label="Search" onInput={handleInput}/>
//                     <button className="btn discussion-btn" type="submit">Search</button>
//                 </Form>
//                 </Nav>
//             </Navbar>
//             {arr}
//         </Container>
//     </div>)
// }

class CourseList extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            courses : [],
            searchField : ''
        }
    }

    searchChange =  (event)=>{
        this.setState({searchField:event.target.value.toLowerCase()})
    }

    async componentDidMount(){
        //const {currentUser} = useAuth()
        console.log("from component did mount");
        await fetch('/courses')
        .then(response => {
            console.log("resp", response);
            response.json().then(courses => this.setState({courses : courses})
        )})
    }

    render() {
        const {courses ,searchField } = this.state
        console.log("InRender", courses)
        const filtered = courses.filter((course) => {
            return (
                course.title.toLowerCase().includes(searchField) || course.inst_name.toLowerCase.includes(searchField) 
            )
        })

        const arr = filtered.map( (course) =>{ 
                return(
                    <Link to={`/courses/${course._id}`}>
                        <CoursePreview uid={course.id} title={course.title} instructor={course.inst_name} intro={course.introduction} enrolled={course.numEnrolled} iid={course.uid} />
                    </Link>
                )
        });

        console.log(filtered , arr, courses , "render")

        return (<div>
            <Container id="post-box">
                <Navbar id="discussion-heading" className="justify-content-between">
                    <h1 class="navbar-brand"><strong>Courses</strong></h1>
                    <Nav>
                    <Form className="form-inline">
                        <Form.Control className="mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn discussion-btn" type="submit">Search</button>
                    </Form>
                    </Nav>
                </Navbar>
                {arr}
            </Container>
        </div>)
    }
}
export default CourseList;