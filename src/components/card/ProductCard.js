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
        <Card.Text style={{ color: "green" }} data-testid="product-price">
          {item.price}
        </Card.Text>
        <Link to={`productDetail/${item.id}`} data-testid="view-link">View</Link>
      </Card.Body>
    </Card >
  );
}

export default ProductCard;
