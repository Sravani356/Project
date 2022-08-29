import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAboutData } from "../../services/services";
import "./AboutUs.css";

const AboutUs = () => {

    const { aboutData } = useSelector(state => state.aboutDetails);

    useEffect(() => {
        getAboutData();
    }, []);

    return (
        <Container>
            {
                aboutData?.map((item) => {
                    return (
                        <div key={item?.id} data-testid="about-us">
                            <Card.Img
                                src={item.img}
                                className="d-block" style={{ borderRadius: "16px" }} />

                            <Card id="card" >
                                <Card.Title style={{ color: "#e76f51" }}>
                                    About Us
                                </Card.Title>
                                <Card.Body>
                                    <p>{item.title}</p>
                                </Card.Body>
                                <Card.Title style={{ color: "#e76f51" }}>

                                    History
                                </Card.Title>
                                <Card.Body>
                                    {item.history}
                                </Card.Body>
                            </Card>
                        </div>

                    );
                })}


        </Container>
    );
};

export default AboutUs;