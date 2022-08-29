/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render, fireEvent, screen, userEvent } from "@testing-library/react";
import { Simulate } from "react-dom/test-utils";
import FeedBackModal from "./FeedBackModal";
import { Data } from '../../Mock_Data';
import { act } from "react-test-renderer";


describe("testing FeedBackModal", () => {

    test("The feedbackmodal component renders and simulating the button", async () => {

        // arrange and act
        render(<FeedBackModal show={true} data={Data} setShow={jest.fn()} handleSubmit={jest.fn()} />)

        const rating = await screen.findByTestId("next-click");
        act(() => {
            fireEvent.click(rating);
        });
        expect(rating).toBeTruthy();

    });

    test("The feedbackmodal component renders and simulating the close button", async () => {

        // arrange and act
        render(<FeedBackModal show={true} data={Data} setShow={jest.fn()} />)

        const closeBtn = await screen.findByTestId("closeBtn");
        expect(closeBtn).toBeTruthy();
        fireEvent.click(closeBtn);
    });

    test("user input is added after starting text", () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const inputContainer = render(<FeedBackModal show={true} data={Data} setShow={jest.fn()}></FeedBackModal>);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const input = inputContainer.getByLabelText("Name");
        Simulate.change(input, { target: { value: "" } });
        expect(input.value).toBe("");
    });

});


