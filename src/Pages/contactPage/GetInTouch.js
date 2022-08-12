/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Col, Row, Form, Image } from "react-bootstrap";
import "./contactUs.css";
import axios from "axios";

function GetInTouch(props) {

    const [values, setValues] = useState({
        username: "",
        mail: "",
        phone: "",
        message: "",
    });

    const changeHandler = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const user = {
            name: values.username,
            mail: values.mail,
            phone: values.phone,
            message: values.message,
        };

        await axios
            .post("http://localhost:5000/getInTouchData", user, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
    }


    return (
        <div>
            <Row className="my-5">
                <Col>
                    <h1>Get In Touch</h1>
                    <Form onSubmit={formSubmitHandler} data-testid="submit-btn">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                name="username"
                                type="text"
                                placeholder="name"
                                data-testid="contact"
                                value={values.username}
                                onChange={changeHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                name="mail"
                                type="email"
                                placeholder="Email"
                                value={values.mail}
                                onChange={changeHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                name="phone"
                                type="phone"
                                placeholder="phone"
                                value={values.phone}
                                onChange={changeHandler}
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                value={values.message}
                                onChange={changeHandler}
                                placeholder="Message"
                                required
                            />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col xs={12} lg={6}>
                    <Image fluid src="Assets/images/images/getintouch.png" />
                </Col>
            </Row>
        </div>
    )
}

export default GetInTouch;