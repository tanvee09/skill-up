import React from 'react';
import {Card, Container, Nav, Form, Navbar} from 'react-bootstrap';
import './../../css/discussion-forum/discussion.css'
import profileimg from './../../assets/profile.png'

export default function Discussion() {   
  return (
    <>
    <Container id="post-box">
      <Navbar id="discussion-heading" className="justify-content-between">
        <h1 class="navbar-brand"><strong>Discussion Forum</strong></h1>
        <Nav>
          <Form className="form-inline">
            <Form.Control className="mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn discussion-btn" type="submit">Search</button>
          </Form>
        </Nav>
      </Navbar>

      <Form className="my-4">
        <Form.Control className="mr-sm-2 mb-2" placeholder="Post Title" aria-label="Post Title "/>
        <Form.Control className="mr-sm-2" as="textarea" placeholder="Post Content" aria-label="Post Content"/>
        <button className="btn discussion-btn mt-2" id="submitComment" type="submit">Create Post</button>
      </Form>

      <Card>
        <Card.Header>
          <img src={profileimg} alt='Profile' className="profile-image"/> tanvee09
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
          <a href="javascript:void(0)" className="btn discussion-btn">Go to discussion</a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <img src={profileimg} alt='Profile' className="profile-image"/> tanvee09
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
          <a href="javascript:void(0)" className="btn discussion-btn">Go to discussion</a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <img src={profileimg} alt='Profile' className="profile-image"/> tanvee09
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
          <a href="javascript:void(0)" className="btn discussion-btn">Go to discussion</a>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
};