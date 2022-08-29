/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Col, Row, Form, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./contactUs.css";
import axios from "axios";

const { REACT_APP_API_URL: apiBaseurl } = process.env;

function GetInTouch() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const formSubmitHandler = async (data) => {

        await axios.post(`${apiBaseurl}/getInTouchData`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    };


    return (
        <div>
            <Row className="my-5">
                <Col>
                    <h1>Get In Touch</h1>
                    <Form onSubmit={handleSubmit(formSubmitHandler)} data-testid="submit-btn">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                name="username"
                                type="text"
                                placeholder="Name"

                                data-testid="contact"
                                {...register("username", { required: "Username is required!" })}
                            />
                            <p className="text-red" id="text">{errors.username?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                name="mail"
                                type="email"
                                placeholder="Email"

                                {...register("mail", {
                                    required: "Email is required!",
                                    pattern: {
                                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
                                        message: "Enter a valid email ID"
                                    }
                                })}
                            />
                            <p className="text-red" id="text1">{errors.mail?.message}</p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                name="phone"
                                type="phone"
                                placeholder="phone"

                                {...register("phone", {
                                    required: "Phone is required!",
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: "Enter valid phone number!"
                                    }
                                })}
                            />
                            <p className="text-red" id="text2">{errors.phone?.message}</p>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="message"
                                placeholder="Message"

                                {...register("message", { required: "Message is required!" })}
                            />
                            <p className="text-red" id="text3">{errors.message?.message}</p>
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
    );
}

export default GetInTouch;