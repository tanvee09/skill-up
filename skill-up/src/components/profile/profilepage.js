import React from 'react';
import {Form, Container, Col, Tabs, Tab, Row} from 'react-bootstrap';
import './../../css/profile/profile.css'
import profileImage from './../../assets/profile.png'

function myDetailsPage() {
  return <Container className="my-3" id="detailsContainer">
    <Row>
      <Col className='text-center'>
        <img src={profileImage} className="profileImg" />
        <p className="fullname">Tanvee Balhara</p>
      </Col>
    </Row>

    <Row>
      <Col xs="auto"><p className="title">Username</p></Col>
      <Col><p className="sep"></p></Col>
    </Row>
    <p className="value">tanvee09</p>

    <Row>
      <Col xs="auto"><p className="title">Email</p></Col>
      <Col><p className="sep"></p></Col>
    </Row>
    <p className="value">tanvee@gmail.com</p>

    <Row>
      <Col xs="auto"><p className="title">Phone Number</p></Col>
      <Col><p className="sep"></p></Col>
    </Row>
    <p className="value">+919836452368</p>

    <Row>
      <Col xs="auto"><p className="title">Address</p></Col>
      <Col><p className="sep"></p></Col>
    </Row>
    <p className="value">Flat No. 123, ABC Street, Town XYZ, Delhi-110011, India</p>
  </Container>
}

function editProfile() {
  return <Container className="my-3" id="detailsContainer">
    <Form>
      
    </Form>
    <Row>
      <Col className='text-center'>
        <img src={profileImage} className="profileImg" />
        <p className="fullname">Tanvee Balhara</p>
      </Col>
    </Row>

    <Row>
      <Col xs="auto"><p className="title">Username</p></Col>
      <Col><p className="sep"></p></Col>
    </Row>
    <p className="value">tanvee09</p>

    <Row>
      <Col xs="auto"><p className="title">Email</p></Col>
      <Col><p className="sep"></p></Col>
    </Row>
    <p className="value">tanvee@gmail.com</p>

    <Row>
      <Col xs="auto"><p className="title">Phone Number</p></Col>
      <Col><p className="sep"></p></Col>
    </Row>
    <p className="value">+919836452368</p>

    <Row>
      <Col xs="auto"><p className="title">Address</p></Col>
      <Col><p className="sep"></p></Col>
    </Row>
    <p className="value">Flat No. 123, ABC Street, Town XYZ, Delhi-110011, India</p>
  </Container>
}

export default function DiscussPost() {   
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