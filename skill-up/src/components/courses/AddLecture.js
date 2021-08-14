import React from 'react';
import {Card, Container, Nav, Form, Navbar} from 'react-bootstrap';
import './../../css/discussion-forum/discussion.css';
import './../../css/discussion-forum/post.css';
import './../../css/course/addLecture.css';

export default function Discussion() {   
  return (
    <>
      <Container id="post-box">
        <Navbar id="discussion-heading" className="justify-content-between">
          <h1 class="navbar-brand"><strong>Add new lecture</strong></h1>
        </Navbar>

        <Form className="my-4">
          <Form.Control rows={'7'} className="mr-sm-2 lectureForm" as="textarea" placeholder="Enter lecture content" aria-label="Post Content"/>
          <button className="btn discussion-btn mt-2" id="submitComment" type="submit">Create Lecture</button>
        </Form>
      </Container>
    </>
  );
};