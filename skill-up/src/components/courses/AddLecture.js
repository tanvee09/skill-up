import React, {useState} from 'react';
import {Card, Container, Nav, Form, Navbar} from 'react-bootstrap';
import './../../css/discussion-forum/discussion.css';
import './../../css/discussion-forum/post.css';
import './../../css/course/addLecture.css';
import axios from 'axios';

export default function AddLecture() {   

  const [LecTitle, setLecTitle] = useState('');
  const [LecContent, setLecContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      _id: '123',
      title: LecTitle,
      content: LecContent
    };
    console.log("posting")
    axios.post('http://localhost:3000/addLecture', data)
            .then(response => console.log(response))
            .catch(err => console.log('error --> ', err));
  }

  return (
    <>
    <div className="discuss">
    <Container id="post-box">
      <Navbar id="discussion-heading" className="justify-content-between heading-add">
        <h1 className="navbar-brand"><strong>New Lecture</strong></h1>
      </Navbar>

      <Form className="my-4" onSubmit={handleSubmit}>
          <Form.Control className="mr-sm-2 mb-2" placeholder="Lecture Title" aria-label="Lecture Title " onInput={e => setLecTitle(e.target.value)}/>
          <Form.Control className="mr-sm-2" as="textarea" placeholder="Enter lecture content..." rows={5} aria-label="Post Content" onInput={e => setLecContent(e.target.value)}/>
          <button className="btn discussion-btn mt-2" id="submitComment" type="submit">Create Lecture</button>
      </Form>

    </Container>
    </div>
    </>
  );
};