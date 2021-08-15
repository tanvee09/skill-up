import React, { useRef, useState } from "react";
import { Form, Button,Alert} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import axios from "axios";


const AddCourse = () => {
    const titleRef = useRef();
    const introductionRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { currentUser } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            console.log("Current",currentUser);
            console.log(titleRef);
            const response = await axios.post('/addcourse',{
              title:titleRef.current.value,
              uid:currentUser.uid,
              introduction:introductionRef.current.value,
              Lectures:[],
              numEnrolled:0
            });

            console.log(response);
            history.push('/instructorLanding');
        } 
        catch {
            setError("Failed to add course");
        }
        setLoading(false);
    }

    return (
        <div className="addCourse">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                  <Form.Group id="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="string" ref={titleRef} required></Form.Control>
                  </Form.Group>
                  <Form.Group id="introduction">
                    <Form.Label>Introduction</Form.Label>
                    <Form.Control type="string" ref={introductionRef} required></Form.Control>
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">
                    Add Course
                  </Button>
                </Form>
        </div>
    )
}

export default AddCourse
