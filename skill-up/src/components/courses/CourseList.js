import React from 'react';
import CoursePreview from './CoursePreview';
import {Container, Form , Navbar, Nav} from 'react-bootstrap';


const CourseList = ({courses}) => {
    const arr = courses.map( ({title,instructor,intro}) =>
        { 
            return(
                <CoursePreview title={title} instructor={instructor} intro={intro} />
            )
        }
    );

    return(
        <div>
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
        </div>
    )
}

export default CourseList;