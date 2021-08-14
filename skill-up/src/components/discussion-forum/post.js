import React from 'react';
import {Row, Col, Card, Container,ListGroup, InputGroup, Form} from 'react-bootstrap';
import './../../css/discussion-forum/discussion.css'
import './../../css/discussion-forum/post.css'
import profileimg from './../../assets/profile.png'

export default function DiscussPost() {   
  return (
    <>
    <div className="discuss post">
    <Container id="post-box">
		  <Card.Title id="username">
				<img src={profileimg} alt='Profile' className="profile-image"/> tanvee09
			</Card.Title>
		  <Card>
        <Card.Header>
				  Lorem ipsum dolor sit amet
        </Card.Header>
        <Card.Body>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Card.Text>
        </Card.Body>
      </Card>

      <hr/>

      <Form className="mt-4">
        <InputGroup>
          <Form.Control as="textarea" placeholder="Create a comment" aria-label="Comment"/>
          <InputGroup.Append><button className="btn discussion-btn" id="submitComment" type="submit"><i className="fa fa-send-o"></i></button></InputGroup.Append>
        </InputGroup>
      </Form>



      <ListGroup variant="flush" className="mt-5">
        <ListGroup.Item>
          <strong className="mr-2">tanvee09</strong><span className="date-time">Jan 20, 2021</span><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong className="mr-2">tanvee09</strong><span className="date-time">Jan 20, 2021</span><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong className="mr-2">tanvee09</strong><span className="date-time">Jan 20, 2021</span><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong className="mr-2">tanvee09</strong><span className="date-time">Jan 20, 2021</span><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong className="mr-2">tanvee09</strong><span className="date-time">Jan 20, 2021</span><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong className="mr-2">tanvee09</strong><span className="date-time">Jan 20, 2021</span><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget.
        </ListGroup.Item>
      </ListGroup>
    </Container>
    </div>
    </>
  );
};