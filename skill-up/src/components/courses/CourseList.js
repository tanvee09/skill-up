import React from 'react';
import Course from './CoursePreview';
import {Container, Alert, Form} from 'react-bootstrap';

const CourseList = ({courses}) => {
    const arr = courses.map( ({title,instructor,intro}) =>
        { 
            return(
                <Container id="post-box">
                    <Alert id="discussion-heading">
                        Courses
                    </Alert>
                    <Course title={title} instructor={instructor} intro={intro} />
                </Container>
            )
        }
    );

    return(
        <div>
            {arr}
        </div>
    )
}

export default CourseList;