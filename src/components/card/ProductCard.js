import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./card.css";

function ProductCard({ item }) {
  return (
    <Card>
      <Card.Img variant="top" style={{ height: "20rem" }}
        src={item.img}
      />
      <Card.Body style={{ padding: "14px" }}>
        <del style={{ opacity: "0.8" }}>Rs.2344/-</del>
        <Card.Text style={{ color: "green" }} data-testid="product-price">
          {item.price}
          <span style={{ color: "#e76f51" }} data-testid="product-discount">
            ({item.discount})
          </span>
        </Card.Text>


        <Link to={`productDetail/${item.id}`}
          style={{
            textDecoration: "none",
            border: "1px solid #556b2f",
            backgroundColor: "#556b2f",
            padding: "4px",
            borderRadius: "9px",
            color: "#fff"
          }}
          data-testid="view-link">
          View
        </Link>
      </Card.Body>
    </Card >
  );
}

export default ProductCard;
