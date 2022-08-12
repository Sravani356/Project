/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { act } from "react-test-renderer";

import ProductDetail, { handling } from "./ProductDetail";
import axios from "axios";
import { Data } from "../../Mock_Data";


describe("", () => {
    test("The menudetails component  shows menu details when it starts up", () => {
        // arrange and act
        render(<ProductDetail />);
    })

    test("Simulating the icon button in menudetails", async () => {
        // arrange and act
        const { findByTestId } = render(<ProductDetail />);
        const icnButton = await screen.findByTestId("icon");
        fireEvent.click(icnButton);
        expect(icnButton).toBeInTheDocument();
    });

    test("should call  function", () => {

        const { getByTestId } = render(<ProductDetail />);
        const pencilButton = getByTestId("pencilIcon");
        const spy = jest.spyOn(handling, "handleShow");

        act(() => {
            fireEvent.click(pencilButton);
        });

        expect(spy).toHaveBeenCalled();
    });

    //     test('should return response records', () => {
    //         const response = new Response(undefined, {
    //             status: 200,
    //             statusText: 'ok'
    //         });
    //         response.json = () => Promise.resolve(MOCK_PROJECTS);
    //         jest
    //         .spyOn(window, 'fetch')
    //         .mockImplementation(() => Promise.resolve(response));

    //         return projectAPI.get().then((data) => expect(data).toEqual(MOCK_PROJECTS))
    // })
    // test('should return Products', () => {
    test('should return records', () => {

        const fetchProductDetail = async () => {
            const response = axios
                .get(`http://localhost:5000/data/1`)
                .then((response) => {
                    setData(response.data);
                })
                .catch((err) => err);
        };
        const response = new Response(undefined, {
            status: 200,
            statusText: 'OK',
        });

        response.json = () => Promise.resolve(Data);

        jest
            .spyOn(window, 'fetch')
            .mockImplementation(() => Promise.resolve(response));
        return fetchProductDetail()
            .then((data) => expect(data).toEqual(data));

    });

});

// });







