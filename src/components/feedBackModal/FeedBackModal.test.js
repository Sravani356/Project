/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render, fireEvent, screen } from "@testing-library/react";
import { Simulate } from "react-dom/test-utils";
import FeedBackModal from "./FeedBackModal";
import { Data } from '../../Mock_Data';


describe("testing FeedBackModal", () => {

    test("The feedbackmodal component renders and simulating the button", async () => {

        // arrange and act
        const { findByTestId } = render(<FeedBackModal show={true} data={Data} setShow={jest.fn()} />)

        const rating = await screen.findByTestId("next-click");
        expect(rating).toBeInTheDocument();
        fireEvent.click(rating);
    });

    test("user input is added after starting text", () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const inputContainer = render(<FeedBackModal show={true}></FeedBackModal>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const input = inputContainer.getByLabelText("Name");
        Simulate.change(input, { target: { value: "" } });
        expect(input.value).toBe("");
    });

})
