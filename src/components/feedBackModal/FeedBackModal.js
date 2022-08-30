/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import RatingModal from "../ratingModal/RatingModal";
import "./FeedBackModal.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

function FeedBackModal(props) {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [showRating, setShowRating] = useState(false);

  const [feedBackDetails, setFeedBackDetails] = useState({});

  const handleClose = (e) => {
    reset();
    props.setShow(false);
    setShowRating(false);

  };


  const checkTheUser = (val) => {

    setFeedBackDetails(val);

    if (props.data.reviews[props.data.reviews.findIndex(user => user.username === val.username)] || props.data.reviews[props.data.reviews.findIndex(user => user.mail === val.mail)]) {
      toast("You have already Submitted the Review!");
      return;
    }
    else {
      setShowRating(true);
    }
  };

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
                    {...register("username", { required: "Username is required" })}
                  />
                  <p className="text-red">{errors.username?.message}</p>

                </Form.Group>
              </Col>
              <Col xs={12} lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    {...register("mail", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
                        message: "Enter a valid email ID"
                      }
                    })}
                  />
                  <p className="text-red">{errors.mail?.message}</p>

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
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Enter valid phone number"
                      }
                    })}
                  />
                  <p className="text-red">{errors.phone?.message}</p>

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

                    placeholder="Message"
                    {...register("message", { required: "Message is required" })}

                  />
                  <p className="text-red">{errors.message?.message}</p>

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
            onClick={handleSubmit(checkTheUser)}
          >
            Next
          </Button>

          <Button className="btn-red" onClick={handleClose} data-testid="closeBtn">
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
        <ToastContainer />
      </Modal>
    </div>
  );
}

export default FeedBackModal;
