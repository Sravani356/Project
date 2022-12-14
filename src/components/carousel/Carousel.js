/* eslint-disable no-unused-vars */
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";


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
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 overflow-yhidden"
            src="/assets/images/images/c.webp"
          />
        </Carousel.Item>
      </Carousel>{" "}
    </div>
  );
}

export default HomePageCarousel;
