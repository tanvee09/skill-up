import {Link} from 'react-router-dom';

const InstructorLanding = () => {


    return (
        <div className="instructor-landing">
            <div className="wrapper">
                <div className="instructor-head">
                    <div className="instructor-profile">
                        Welcome user!
                    </div>
                    <div className="instructor-add">
                        <Link to="/addCourse">
                            Add Course
                        </Link>
                    </div>
                </div>
                <div className="instructor-list">
                    <div className="instructor-list-header">
                        Your Courses
                    </div>
                    <div className="instructor-list-grid">
                        {/* for loop */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorLanding
