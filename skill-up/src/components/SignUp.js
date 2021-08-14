import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import './Login.css'
export default function SignUp() {
  const emailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const locationRef = useRef();
  const roleRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [student, setStudent] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function changeRole(e) {
    if (roleRef.current.value === "Student") {
      setStudent(true);
    } else {
      setStudent(false);
    }
    // console.log(farmer);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      const x = await signup(emailRef.current.value, passwordRef.current.value);
      console.log("UID", x.user.uid);
      if(student)
      {
        const response=await axios.post("/user", {
          _id: x.user.uid,
          name: nameRef.current.value,
          phoneNo: phoneRef.current.value,
          email: emailRef.current.value,
          address: locationRef.current.value,
          student: true,
          instructor: false
        });
        console.log(response);
        await history.push("/landing");
      }
      else{
        const response = await axios.post("/instructor", {
          _id: x.user.uid,
          name: nameRef.current.value,
          phoneNo: phoneRef.current.value,
          email: emailRef.current.value,
          address: locationRef.current.value,
          student: false,
          instructor: true
        });
        console.log(response);
        history.push("/landing");
      }
      console.log("SignUp");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
    <div className="login-signup">
      
      <Card className="basic">
      <div className="card-body2 container">
        <Card.Body className="w-100" style={{background:"transparent",marginRight:"80%"}}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} >
          <h2 className="text-center text-uppercase mt-4" style={{fontSize:"40px"}}>Sign Up</h2>
          <hr style={{borderTop:"1px solid white"}}></hr>
            <br></br>
            <div className="d-flex flex-row" style={{ gap: "20%" }}>
              <div>
                <Form.Group id="name">
                  <Form.Label className="font-weight-bold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    ref={nameRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label className="font-weight-bold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="phone">
                  <Form.Label className="font-weight-bold">
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    type="text"
                    ref={phoneRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="address">
                  <Form.Label className="font-weight-bold">Location</Form.Label>
                  <Form.Control
                    type="text"
                    ref={locationRef}
                    required
                  ></Form.Control>
                </Form.Group>
              </div>
              <div>
                <Form.Group>
                  <Form.Label className="font-weight-bold">Role</Form.Label>
                  <Form.Control
                    onChange={changeRole}
                    ref={roleRef}
                    as="select"
                    defaultValue="Student"
                  >
                    <option>Student</option>
                    <option>Instructor</option>
                  </Form.Control>
                </Form.Group>
                
                <Form.Group id="password">
                  <Form.Label className="font-weight-bold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group id="password-confirm">
                  <Form.Label className="font-weight-bold">Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  ></Form.Control>
                </Form.Group>

              </div>
            </div>

            <div className="btn-content">
            <Button disabled={loading}  type="submit"style={{fontSize:"20px"}}>
              Sign Up
            </Button>
            </div>

          </Form>

          <div className="w-100 text-center mt-2">
            Already have an account ? <Link to="/login">Log In</Link>
          </div>

        </Card.Body>
      </div>
      </Card>
    </div>
    </>
  );
}
