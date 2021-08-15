import React, { useRef, useState } from "react";
import { Form, Button,Alert} from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const AddCourse = () => {
    const titleRef = useRef();
    const introductionRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { currentUser } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            console.log("Current",currentUser);
            // const response=await axios.post('/role',{
            //     _id:_id
            //   });
        } 
        catch {
            setError("Failed to Sign In");
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
                  Login
                </Button>
            </Form>
        </div>
    )
}

export default AddCourse
