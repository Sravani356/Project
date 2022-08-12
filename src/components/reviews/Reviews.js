/* eslint-disable no-unused-vars */
// import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiUserCircle } from 'react-icons/bi';
import "./Reviews.css";

function Reviews(props) {
  return (
    <div className="card">
      {props.data.reviews?.map((review, index) => (
        <Row key={index}>

          <Col lg="11">
            <h6 className="mb-1" >
              <BiUserCircle style={{ color: "#e76f51" }} size={28} />
              {" "}{review.name}</h6>
            {/* <p>{review.date}</p> */}
            <p>{review.message}</p>
            <hr />
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Reviews;
