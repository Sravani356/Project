/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import RatingModal from "../ratingModal/RatingModal";
import "./FeedBackModal.css";

function FeedBackModal(props) {
  
  const [showRating, setShowRating] = useState(false);
  const handleClose = () => props.setShow(false);
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
  const feedBackDetails = {
    name: values.username,
    email: values.mail,
    phone: values.phone,
    message: values.message,
    date: new Date(),
  };
  const checktheuser=()=>{
   if( props.data.reviews.find(user=>user.email===feedBackDetails.email)){
    
    alert("review submitted already")

   }
    
    else{
      setShowRating(true)
    }
  }
  return (
    <div>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-red">
          <Modal.Title>FeedBack</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col xs={12} lg={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="username"
                    value={values.username}
                    onChange={changeHandler}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="mail"
                    value={values.mail}
                    onChange={changeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={12}>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={values.phone}
                    onChange={changeHandler}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
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
              </Col>
            </Row>

          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button
          type="submit"
            className="btn-red"
            data-testid="next-click"
            onClick={checktheuser}
          >
            Next
          </Button>

          <Button className="btn-red" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        {showRating && (
          <RatingModal
            id={props.id}
            feedBackDetails={feedBackDetails}
            product={props.product}
            data={props.data}
            setShowRating={setShowRating}
            handleClose={handleClose}
          />
        )}
      </Modal>
    </div>
  );
}

export default FeedBackModal;
