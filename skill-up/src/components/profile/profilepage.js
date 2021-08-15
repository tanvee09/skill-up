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

    return ;
  }

  if (currentUser) {
    let uid = currentUser.uid;
    axios.post('user/get', {uid: uid})
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
    <Container className="align-items-center abc" >
    <Container className="my-3" id="detailsContainer">
      <Row className="align-items-center">
        <Col xs="6" className="text-center align-items-center">
          <img src={profileImage} alt="" className="profileImg" />
          <p className="fullname">{Name}</p>
        </Col>
        <Col>
          <p className="title">Email</p>
          <p>{Email}</p>
      
          <p className="title">Phone Number</p>
          <p>{Phone}</p>
      
          <p className="title">Address</p>
          <p>{Location}</p>
        </Col>
      </Row>
    </Container>
    </Container>
  );
};