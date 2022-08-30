/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import "./Reviews.css";

function Reviews(props) {
  // console.log(props.data);
  return (
    <div className="card">
      {props.data?.reviews?.map((review, index) => (
        <Row key={index}>

          <Col lg="11" className="mt-3">
            <p>"{review.message}"</p>
            <h6 className="ml-5 mb-6">
              <BiUserCircle style={{ color: "#e76f51" }} size={28} />
              {" "}Reviewed by {review.username}
            </h6>
            <hr />
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Reviews;
