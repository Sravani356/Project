/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import GetInTouch from "./GetInTouch";
import axios from "axios";
import { FaHome } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import './contactUs.css';

const ContactUs = () => {
    // function Products() {

    const [contacts, setContacts] = useState([])

    const fetchContactDetails = async () => {
        const response = await axios.get("http://localhost:5000/contactData")
        setContacts(response.data)
    }

    useEffect(() => {
        fetchContactDetails()
    }, [])

    return (
        <Container>

            {/* <h1>Contact Us</h1> */}
            {contacts.map((item) => {
                return (
                    <Row lg={3} md={4} key={item.id} data-testid="contactUs" style={{marginTop: "1rem"}}>
                        <Col xs={12} lg={4} md={4}>
                            <FaHome style={{ color: "#e76f51" }} size={28} />

                            <p>{item.address}</p>
                        </Col>
                        <Col xs={12} lg={4} md={4}>
                            <AiFillPhone style={{ color: "#e76f51" }} size={28} />

                            {
                                item.phone.map((number, index) => {
                                    return <p key={index}>{number}</p>
                                })
                            }

                        </Col>
                        <Col xs={12} lg={4} md={4}>
                            <MdEmail style={{ color: "#e76f51" }} size={28} />
                            <p>{item.email}</p>
                        </Col>
                    </Row>
                )
            })}

            <GetInTouch />

        </Container>

    )
}

export default ContactUs;

