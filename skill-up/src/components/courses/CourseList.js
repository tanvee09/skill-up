import React from 'react';
import CoursePreview from './CoursePreview';
import {Container, Form , Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class CourseList extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            courses : [],
            searchField : ''
        }
    }

    searchChange=  (event)=>{
        this.setState({searchField:event.target.value.toLowerCase()})
    }

    async componentDidMount(){
        console.log("from component did mount");
        await fetch('/api/courses')
        .then(response => {
            console.log(response);
            response.json().then(courses => this.setState({courses : courses})
        )})
    }

    render() {
        const {courses ,searchField} = this.state
        const filtered = courses.filter((course) => {
            return (
                course.title.toLowerCase().includes(searchField) /* || course.inst_name.toLowerCase.includes(searchField) */
            )
        })

        const arr = filtered.map( (course) =>{ 
                return(
                    <Link to={`/courses/${course.id}`}>
                        <CoursePreview title={course.title} instructor={course.instructor} intro={course.introduction} enrolled={course.numEnrolled} />
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