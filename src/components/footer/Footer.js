import React from 'react';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';
import "./Footer.css";

function Footer() {
    return (
        <div id="footer" >
            <Navbar style={{ backgroundColor: '#556b2f', bottom: 0 }}>
                <Container id="container">
                    <NavbarBrand style={{ color: "white" }}>
                        <p className="text-center">copyright &copy; 2022 all rights reserved</p>
                    </NavbarBrand>
                </Container>
            </Navbar>
        </div>


    )
}

export default Footer