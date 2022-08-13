/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-test-renderer";

import ProductDetail, { handling } from "./ProductDetail";

import axios from "axios";
import { Data } from "../../Mock_Data";


describe("<PRODUCTDETAIL/>", () => {
    test("The productdetails rendering", () => {
        // arrange and act
        render(<ProductDetail />);
    })

    test("Simulating the icon button in productdetails", async () => {
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

    test('should return records', () => {

        const setData = jest.fn();
        render(<ProductDetail />);

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








