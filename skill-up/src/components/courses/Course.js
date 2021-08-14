import React from 'react';
import {Card, Container,ListGroup, Form, Nav} from 'react-bootstrap';
import './../../css/discussion-forum/discussion.css'
import './../../css/discussion-forum/post.css'

export default function Course(props) {   
  return (
    <>
    <Container id="post-box">
		  <Card.Title >
        {props.title}
			</Card.Title>
		  <Card>
        <Card.Header>
				  Introduction
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.intro}</Card.Text>
        </Card.Body>
      </Card>

      <hr/>

      
      <Form className="mt-4">
        <Form.Control className="mr-sm-2" as="textarea" aria-label="Comment"/>
        <button className="btn discussion-btn mt-2" id="submitComment" type="submit">Post Lecture</button>
      </Form>



      <ListGroup variant="flush" className="mt-5">
        <ListGroup.Item>
          <strong className="mr-2">Lecture 1</strong><span className="date-time">Jan 20, 2021</span><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong className="mr-2">Lecture 2</strong><span className="date-time">Jan 20, 2021</span><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong className="mr-2">Lecture 3</strong><span className="date-time">Jan 20, 2021</span><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.
        </ListGroup.Item>
      </ListGroup>
      <br/> <br/>
      <a href="../discuss/123" className="btn discussion-btn">Discussion forum for this course</a>
    </Container>
    </>
  );
};