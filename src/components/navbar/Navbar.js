import { Container, Nav, NavItem, Navbar } from "react-bootstrap";

import AboutUs from "../../Pages/aboutUsPage/AboutUs";
import ContactUs from "../../Pages/contactPage/ContactUs";
import Home from "../../Pages/homePage/home";
import { NavLink } from 'react-router-dom';
import Products from "../../Pages/productsPage/Products";
import React from "react";

// import '../index.css';





// import AboutUs from "../aboutUs";
// import Home from "../home";
// import ContactUs from "./contact";
// import Products from "./products";


function NavbarComponent() {
    return (
        <>
            <div>
                <Navbar style={{ backgroundColor: '#556b2f' }} collapseOnSelect expand="lg" bg="#f5ee2w" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">

                            <img style={{ borderRadius: "6px" }} src="/Assets/images/images/LOGO.jpg" alt="logo" width="200" height="90" />


                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav as="ul" className="ms-auto icons" >
                                <NavItem as="li" href="/">
                                    <Nav.Link as={NavLink} to="/">
                                        <img style={{ borderRadius: "14px" }} src="Assets/icons/Home.png" alt="logo" width="25" height="25" />
                                        {" "}
                                        Home</Nav.Link>
                                </NavItem>
                                <NavItem href="/products">

                                    <Nav.Link as={NavLink} to="/products">
                                        <img style={{ borderRadius: "14px" }} src="Assets/icons/Product.png" alt="logo" width="25" height="25" />
                                        {" "}
                                        Products</Nav.Link>

                                </NavItem>
                                <NavItem href="/about-us">
                                    <Nav.Link as={NavLink} to="/about-us/content">
                                        <img style={{ borderRadius: "14px" }} src="Assets/icons/AboutUs.png" alt="logo" width="25" height="25" />
                                        {" "}
                                        About Us</Nav.Link>

                                </NavItem>
                                <NavItem href="/contact-us">
                                    <Nav.Link as={NavLink} to="/contact-us">
                                        <img style={{ borderRadius: "14px" }} src="Assets/icons/ContactUs.png" alt="logo" width="25" height="25" />
                                        {" "}
                                        Contact Us</Nav.Link>

                                </NavItem>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </>

    );
}


export default NavbarComponent;