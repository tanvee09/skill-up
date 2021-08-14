import React from 'react';
import {Card, Container,ListGroup, Form, Nav} from 'react-bootstrap';
import './../../css/discussion-forum/discussion.css'
import './../../css/discussion-forum/post.css'

class Course extends React.Component {   
  
  constructor (props) {
      super(props)
      this.state = {
          title : '',
          isInstructor : '',
          introduction : '',
          Lectures : [],
          instructor : {},
          access : false
      }
  }

  componentDidMount()
  {
    const { id } = this.props.match.params;
    fetch(`/api/courses/${id}`)
    .then(response => response.json())
    .then( response => {
      if (response.access)
      {
        this.setState({
          access: true , 
          title: response.Course.title, 
          introduction : response.Course.introduction,
          Lectures : response.Course.Lectures,
          instructor : response.instructor
        })
        if(response.isInstructor)
          this.setState({isInstructor : true})
      }
    })
  }

  render() {
    const { id } = this.props.match.params;
    const {title, instructor, introduction, Lectures} = this.state;
    const arr = Lectures.map( (lecture) => {
      return (<ListGroup.Item>
        <strong className="mr-2">{lecture.title}</strong><span className="date-time">{lecture.date}</span><br/>
        {lecture.Body.content}
      </ListGroup.Item>
      )
    })

    return(
      <>
      <Container id="post-box">
        <Card.Title >
          {title}
        </Card.Title>
        <Card>
          <Card.Header>
            Instructor : {instructor.name}
          </Card.Header>
          <Card.Body>
            <Card.Text>{introduction}</Card.Text>
          </Card.Body>
        </Card>

        <hr/>

        
        <Form className="mt-4">
          <Form.Control className="mr-sm-2" as="textarea" aria-label="Comment"/>
          <button className="btn discussion-btn mt-2" id="submitComment" type="submit">Post Lecture</button>
        </Form>
        <ListGroup variant="flush" className="mt-5">
        {arr}
        </ListGroup>
        <br/> <br/>
        <a href= {`../discuss/${id}`} className="btn discussion-btn">Discussion forum for this course</a>
      </Container>
      </>
    )
  };
};

export default Course;