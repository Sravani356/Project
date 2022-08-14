/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Image, Row, Button, Container } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { BsTagFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import FeedBackModal from "../../components/feedBackModal/FeedBackModal";
import './productDetails.css';
import Reviews from "../../components/reviews/Reviews";
import { MdReviews } from "react-icons/md";


export let handling = {
  handleShow: null,
};

function ProductDetail() {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);

  handling.handleShow = () => setShow(true);

  const { id } = useParams();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:5000/data/${id}`)
    setData(response.data);
  };

  useEffect(() => {
    fetchProductDetail()
  }, [id])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <Row>
        <Col xs={12} lg={8}>
          <Image data-testid="projectDetail_img" src={data.img} alt="image" />
          <hr />
          <Row>
            <Col lg={11} style={{ color: '#556b2f' }}>
              <h3><MdReviews /></h3>
              <h3 className="text-center" id="test">
                Leave a Review{" "}
              </h3>
            </Col>

            <Col lg={1}>
              <Button
                variant="primary"
                onClick={() => handling.handleShow()}
                style={{ backgroundColor: "white", border: "1px solid #e76f51" }}
                data-testid="pencilIcon"
              >
                <FaPencilAlt data-testid="icon" style={{ color: "#556b2f" }} />
              </Button>
            </Col>
            <Reviews data={data} />

            <FeedBackModal show={show} setShow={setShow} data={data} id={id} />
          </Row>
        </Col>

        <Col xs={12} lg={4}>
          <h5>{data.name}</h5>
          <div className="details">
            <small>
              <h6 className="Color">
                <FaRupeeSign />
                <strong> Price : </strong> {data.price}
              </h6>
              <p>
                <BsTagFill className="Color" />
                <strong> Category :</strong> {data.category}
              </p>
              <p>
                <BsTagFill className="Color" />
                <strong> Fit :</strong> {data.fit}
              </p>
              <p>
                <IoMdCheckmarkCircle className="Color" />
                <strong>  Availability:</strong> {data.availibilityCount}
              </p>
            </small>
            <h5 className="my-3 Color">Description</h5>
            <p>{data.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
