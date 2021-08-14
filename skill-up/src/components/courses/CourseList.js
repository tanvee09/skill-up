import React from 'react';
import CoursePreview from './CoursePreview';
import {Container, Form , Navbar, Nav} from 'react-bootstrap';


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

    componentDidMount(){
        console.log("from component did mount");
        await fetch('/api/courses')
        .then(response => {
            console.log("from component did mount");
            response.json().then(courses => this.setState({courses : courses})
        )})
    }

    render() {
        const {courses ,searchField} = this.state
        const filtered = courses.filter((course) => {
            return (
                course.name.toLowerCase().includes(searchField) || course.instructor.toLowerCase.includes(searchField)
            )
        })

        const arr = filtered.map( ({title,instructor,intro}) =>{ 
                return(<CoursePreview title={title} instructor={instructor} intro={intro} />)
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