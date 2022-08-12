/* eslint-disable no-unused-vars */
// import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from 'react-bootstrap';
// import "./carousel.css";


function HomePageCarousel() {
  return (
    <div className=" carouselContainer overflow-yhidden">
      <Carousel interval={1000}>
        <Carousel.Item>
          <Image
            className="d-block w-100 overflow-yhidden"
            src="/assets/images/images/c1.webp"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 overflow-yhidden"
            src="/assets/images/images/cc.webp"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 overflow-yhidden"
            src="/assets/images/images/c.webp"
          />
          <Carousel.Caption>
            {/* <h1>Welcome to SkyWave Restaurant</h1> 
   <h3>Healthy,Authentic and Safe Food </h3>   */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{" "}
    </div>
  );
}

export default HomePageCarousel;
