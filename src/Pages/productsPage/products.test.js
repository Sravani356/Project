import { render, waitFor, screen } from "@testing-library/react";
import { Data } from "../../Mock_Data";
import axios from "axios";
import Products from './Products';


//mocking is a process of providing a dummy response if any ajax call is made
jest.mock("axios");


test("Products", () => {
    axios.get.mockResolvedValue({ data: Data });
    render(<Products />);

    const todoList = waitFor(() => screen.findAllByTestId("data"));

    expect(todoList).toBeDefined();
});

test("useEffect", () => {
    jest.mock('React', () => ({
        ...jest.requireActual('React'),
        useEffect: jest.fn(),
    }));
})



