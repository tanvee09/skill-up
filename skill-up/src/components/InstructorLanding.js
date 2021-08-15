import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useEffect,useState } from 'react';
import axios from 'axios';
import './InstructorLanding.css';

const InstructorLanding = () => {
    const {currentUser} = useAuth();
    const [courses,setCourses] = useState([]);
    
    async function viewCourses() {
        const uid = currentUser.uid;
        // console.log(uid);
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
                <div className="instructor-list">
                    <div className="instructor-list-header">
                        <div className="instructor-head">
                            Your Courses
                        </div>
                        <div className="instructor-view">
                            <Button onClick={viewCourses}>
                                View
                            </Button>
                        </div>
                    </div>
                    <div className="instructor-list-grid">
                        {/* for loop */}
                        {courses.map(course => (
                            <div className="instructor-course">
                                {course.uid} {course._id} {course.title} {course.introduction}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorLanding
