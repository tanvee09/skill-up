import React, {useState} from 'react';
import {Form, Container, Col, Tabs, Tab, Row} from 'react-bootstrap';
import './../../css/profile/profile.css'
import profileImage from './../../assets/profile.png'
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';


function editProfile() {
  return <Container className="my-3" id="detailsContainer">
  </Container>
}

export default function DiscussPost() {   
  const { currentUser } = useAuth();

  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Location, setLocation] = useState('');
  const [Phone, setPhone] = useState('');

  function myDetailsPage() {

    return <Container className="my-3" id="detailsContainer">
      <Row>
        <Col className='text-center'>
          <img src={profileImage} alt="" className="profileImg" />
          <p className="fullname">{Name}</p>
        </Col>
      </Row>
  
      <Row>
        <Col xs="auto"><p className="title">Email</p></Col>
        <Col><p className="sep"></p></Col>
      </Row>
      <p className="value">{Email}</p>
  
      <Row>
        <Col xs="auto"><p className="title">Phone Number</p></Col>
        <Col><p className="sep"></p></Col>
      </Row>
      <p className="value">{Phone}</p>
  
      <Row>
        <Col xs="auto"><p className="title">Address</p></Col>
        <Col><p className="sep"></p></Col>
      </Row>
      <p className="value">{Location}</p>
    </Container>
  }

  if (currentUser) {
    let uid = currentUser.uid;
    axios.post('http://localhost:3000/user/get', {uid: uid})
      .then(response => {
        let user = response.data;
        setEmail(user.email);
        setName(user.name);
        setPhone(user.phoneNo);
        setLocation(user.address);
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <Container id="profileContainer" className="my-5">
        <Tabs defaultActiveKey="details" id="uncontrolled-tab" className="mb-3">
          <Tab eventKey="details" title="My Details">
            {myDetailsPage()}
          </Tab>
          
          <Tab eventKey="editProfile" title="Edit Profile">
            <div>
              {editProfile()}
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};