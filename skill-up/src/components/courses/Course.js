import React from 'react';
import {ListGroup, Form, Nav, Container , Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../../css/discussion-forum/discussion.css'
import './../../css/discussion-forum/post.css'
import axios from 'axios';

class Course extends React.Component {   
  
  constructor (props) {
      super(props)
      this.state = {
          title : '',
          isInstructor : '',
          introduction : '',
          Lectures : [],
          instructor : {},
      }
  }

  componentDidMount()
  {
    console.log(this.props)
    const { id } = this.props.match.params;
    const uid = this.props.uid
    fetch(`/api/courses/${id}/${uid}`)
    .then(response => response.json())
    .then( response => {
        this.setState({ 
          title: response.course.title, 
          introduction : response.course.introduction,
          Lectures : response.course.Lectures,
          instructor : response.instructor,
          enrolled : response.course.numEnrolled,
          isInstructor : response.isInstructor
        })
      })
  }

  render() {
    const {isInstructor , title, instructor, introduction, Lectures} = this.state;
    let arr = ""
    if(Lectures.length > 0){
        arr = Lectures.map( (lecture) => {
        return (
          <ListGroup.Item>
            <strong className="mr-2">{lecture.title}</strong><span className="date-time">{lecture.date}</span><br/>
              {lecture.content}
          </ListGroup.Item>
          )
      })
    }
    else
    {
      arr = <Form className='my-4' ><button className='btn discussion-btn mt-2' id='submitComment' type='submit'>Enroll for the course</button></Form>
    }
    const form = '';
    const handleSubmit = (e)=>{
      e.preventDefault();
      console.log("posting")
      axios.post('/enroll')
              .then(response => console.log(response))
              .catch(err => console.log('error --> ', err));
    }
    if (isInstructor){ 
      form = "<Link to='/addLecture'> addLecture </Link>"
    }
    
    return (
      <>
      <div className="discuss post">
        <Container id="post-box">
          <Card.Title id="username">
            Course Name : {title}
          </Card.Title>
          <Card>
            <Card.Header>
              Instructor : {instructor.name}
            </Card.Header>
            <Card.Body>
              Introduction
              <Card.Text>{introduction}</Card.Text>
            </Card.Body>
          </Card>

          <hr/>
          {form}
          <ListGroup variant="flush" className="mt-5">
            {arr}
          </ListGroup>
        </Container>
      </div>
    </>
    )
  }
};
export default Course;