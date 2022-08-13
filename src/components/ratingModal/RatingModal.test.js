/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { fireEvent, render, screen } from "@testing-library/react";
import RatingModal from "./RatingModal";
// import feedBackDetails from "../feedBackModal/FeedBackModal";
import { feedBackDetails, Data } from '../../Mock_Data';



window.alert = jest.fn();



test("The ratingmodal component renders and simulating the buttons", async () => {
    // arrange and act
    const setShowRating = jest.fn();
    render(
        <RatingModal
            feedBackDetails={feedBackDetails}
            setShowRating={setShowRating}
            data={Data}
        />
    );
    const rating = await screen.findByTestId("submit-btn");
    expect(rating).toBeInTheDocument();
    fireEvent.click(rating);

    const ratingsButton = await screen.findByTestId("ratings-btn");
    expect(ratingsButton).toBeInTheDocument();
    fireEvent.click(ratingsButton);

    const ratingsClose = await screen.findByTestId("ratings-close");
    expect(ratingsClose).toBeInTheDocument();
    fireEvent.click(ratingsClose);
});

test('onSubmit', async () => {
    const setShowRating = jest.fn();

    render(
        <RatingModal
            feedBackDetails={feedBackDetails}
            setShowRating={setShowRating}
            data={Data}
        />);

    fireEvent.click(screen.getByTestId("submit-btn"))
    expect(screen.getByTestId("submit-btn")).toBeInTheDocument()

});

