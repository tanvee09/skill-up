import React, {useState, useEffect} from 'react';
import {Card, Container, Nav, Form, Navbar} from 'react-bootstrap';
import './../../css/discussion-forum/discussion.css'
import profileimg from './../../assets/profile.png'


export default function Discussion() {   

  const [addPost, setAddPost] = useState('');

  function getAddPost() {
    if (addPost == '')
      setAddPost(<>
        <hr/>
        <Form className="my-4">
          <Form.Control className="mr-sm-2 mb-2" placeholder="Post Title" aria-label="Post Title "/>
          <Form.Control className="mr-sm-2" as="textarea" placeholder="Post Content" aria-label="Post Content"/>
          <button className="btn discussion-btn mt-2" id="submitComment" type="submit">Create Post</button>
        </Form>
        <hr/>
      </>);
    else
      setAddPost('');
  }

  return (
    <>
    <div className="discuss">
    <Container id="post-box">
      <Navbar id="discussion-heading" className="justify-content-between">
        <h1 class="navbar-brand"><strong>Discussion Forum</strong></h1>
        <Nav>
          <button className="postAddBtn" onClick={getAddPost}>+</button>
        </Nav>
      </Navbar>

      {addPost}

      <Card>
        <Card.Header>
          <img src={profileimg} alt='Profile' className="profile-image"/> tanvee09
        </Card.Header>
        <Card.Body>
          <Card.Title>Lorem ipsum</Card.Title>
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
    </div>
    </>
  );
};