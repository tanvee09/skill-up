import React, {useState, useEffect} from 'react';
import {Card, Container, Nav, Form, Navbar} from 'react-bootstrap';
import './../../css/discussion-forum/discussion.css';
import './../../css/discussion-forum/post.css';
import './../../css/course/addLecture.css';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from "react-router-dom";
export default function AddLecture(props) {  
  let cid = props.match.params.cid;
  const { currentUser } = useAuth();
  let uid = currentUser.uid;
  let history = useHistory()
  const [LecTitle, setLecTitle] = useState('');
  const [LecContent, setLecContent] = useState('');

  useEffect(() => {
    let data = {cid: cid, uid: uid};
    axios.post('/checkifinstructor', data)
    .then((res) => {
      if (res.data == false) {
        history.push('/courses/' + cid)
      }
    })
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    let data = {
      cid: cid,
      uid: uid,
      title: LecTitle,
      content: LecContent
    };
    console.log("posting")
    axios.post('/addLecture', data)
            .then((response) => {
              history.push("/courses/" + cid)
            })
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