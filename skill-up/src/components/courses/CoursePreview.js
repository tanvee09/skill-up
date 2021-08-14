import React from 'react';
import {Card} from 'react-bootstrap';
import profileimg from './../../assets/profile.png'

class Course extends React.Component{
    render(){
        return(
            <Card>
            <Card.Header>
              {this.props.title}
            </Card.Header>
            <Card.Body>
              <Card.Title><img src={profileimg} alt='Profile' className="profile-image"/>Intructor : {this.props.instructor}</Card.Title>
              <Card.Text>{this.props.intro}</Card.Text>
              <a href="javascript:void(0)" className="btn discussion-btn">Go to course</a>
            </Card.Body>
          </Card>
        )
    }
}

export default Course;