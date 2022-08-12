/* eslint-disable no-unused-vars */
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { CgSmileSad } from "react-icons/cg";
import { CgSmileNeutral } from "react-icons/cg";
import { MdSentimentNeutral } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";
import { GoSmiley } from "react-icons/go";
import "./RatingModal.css";

function RatingModal(props) {
  const [rating, setRating] = useState(0);

  props.feedBackDetails.ratings = rating;

  const handleCloseRating = () => {
    props.setShowRating(false);
  };
  const updateRating = (e) => {
    const value = e.target.value;
    setRating(value);
    alertRatings(e);
  };
  const alertRatings = (e) => {
    alert(`you have selected ${e.target.value} ratings`);
  };

  const alertSuccess = (e) => {
    alert("submitted successfully");
  };



  const feedbackSubmit = async (event) => {
    event.preventDefault();

    await axios
      .patch(
        `http://localhost:5000/data/${props.id}`,
        {
          reviews: [...props.data.reviews, props.feedBackDetails],
        },
      )
    alertSuccess(); //alert for successful submission 

  };
  return (
    <div className="rating-modal">
      <Modal.Dialog>
        <Modal.Header className="r-red">
          <Modal.Title className="text-white">Ratings</Modal.Title>
          <Button
            type="button"
            className="closeBtn"
            data-testid="ratings-close"
            onClick={handleCloseRating}
          >
            ×
          </Button>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ textAlign: "center" }}>Rating</h5>

          <Button
            value="1"
            data-testid="ratings-btn"
            className="icon-btn"
            onClick={updateRating}
          >
            <CgSmileSad className="iconSize" />
          </Button>

          <Button value="2" className="icon-btn" onClick={updateRating}>
            <CgSmileNeutral className="iconSize" />
          </Button>

          <Button value="3" className="icon-btn" onClick={updateRating}>
            <MdSentimentNeutral className="iconSize" />
          </Button>

          <Button value="4" className="icon-btn" onClick={updateRating}>
            <VscSmiley className="iconSize" />
          </Button>

          <Button value="5" className="icon-btn" onClick={updateRating}>
            <GoSmiley className="iconSize" />
          </Button>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="bg-red"
            data-testid="submit-btn"
            onClick={(props.handleClose, feedbackSubmit)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default RatingModal;
