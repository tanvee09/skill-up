import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import axios from 'axios';
import './InstructorLanding.css';
import CoursePreview from './courses/CoursePreview';

const InstructorLanding = () => {
    const {currentUser} = useAuth();
    const [courses,setCourses] = useState([]);
    
    async function viewCourses() {
        const obj = document.getElementsByClassName('instructor-list')[0];
        const style = window.getComputedStyle(obj);
        const display = style.getPropertyValue('display');

        if(display==='none')
            obj.style.display = 'flex'
        else
            obj.style.display = 'none'

        if(!courses.length)
        {
            const uid = currentUser.uid;
            let response = await axios.post("/getcourse", {
            uid: uid
            });
            console.log(response);
            if(response.data==="")
            {
            setCourses([]);
            }
            else{
                console.log("Data",response.data);
                setCourses(JSON.parse(JSON.stringify(response.data)));
                console.log("Courses",courses);
            }
        }  
        console.log(courses.length);  
    }

    return (
        <div className="instructor-landing">
            <div className="wrapper">
                <div className="instructor-head">
                    <div className="instructor-profile">
                        Welcome {currentUser.email}!
                    </div>
                    <div className="instructor-add">
                        <Link to="/addCourse">
                            <Button>
                                Add Course
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="instructor-list-header">
                    <div className="instructor-view">
                        <Button onClick={viewCourses}>
                            Your Courses
                        </Button>
                    </div>
                </div>
                <div className="instructor-list">
                    
                    <div className="instructor-list-grid">
                        {/* for loop */}
                        {!courses.length && (
                            <div className="instructor-course">
                                You have not created any course.
                            </div>
                        )}
                        {courses.map(course => (
                            <div className="instructor-course">
                                    <CoursePreview title={course.title} instructor={course.uid} intro={course.introduction} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorLanding
