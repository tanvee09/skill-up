import React from 'react';
import {Card} from 'react-bootstrap';
import profileimg from './../../assets/profile.png'
import './../../css/course/coursePreview.css'
//import './../../css/discussion-forum/discussion.css'

class CoursePreview extends React.Component{
    render(){
        return(
            <Card class="mg3" className="tc dib grow ma2 pa3 bw1">
              <Card.Header>
                {this.props.title}
              </Card.Header>
              <Card.Body>
                <Card.Text class="bold">{/* <img src={profileimg} alt='Profile' className="profile-image"/> */}Intructor : {this.props.instructor}</Card.Text>
                <Card.Text>{this.props.intro}</Card.Text>
                <div className="btn">{this.props.enrolled} Enrolled</div>
              </Card.Body>
            </Card>
        )
    }
}

export default CoursePreview;