/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GetInTouch from "./GetInTouch";
import { FaHome } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { getContactData } from "../../services/services";
import "./contactUs.css";


const ContactUs = () => {

    const { contactData } = useSelector(state => state.contactDetails);


    useEffect(() => {
        getContactData();
    }, []);

    return (
        <Container>

            <h1 style={{ color: "green" }}>Contact Us</h1>

            {contactData?.map((item) => {
                return (
                    <Row lg={3} md={4} key={item.id} data-testid="contactUs" style={{ marginTop: "1rem" }}>
                        <Col xs={12} lg={4} md={4}>
                            <FaHome style={{ color: "#e76f51" }} size={28} />

                            <p>{item.address}</p>
                        </Col>
                        <Col xs={12} lg={4} md={4}>
                            <AiFillPhone style={{ color: "#e76f51" }} size={28} />

                            {
                                item.phone.map((number, index) => {
                                    return <p key={index}>{number}</p>;
                                })
                            }

                        </Col>
                        <Col xs={12} lg={4} md={4}>
                            <MdEmail style={{ color: "#e76f51" }} size={28} />
                            <p>{item.email}</p>
                        </Col>
                    </Row>
                );
            })}

            <GetInTouch />

        </Container>

    );
};

export default ContactUs;

