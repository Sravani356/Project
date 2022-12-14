import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactUs from "./ContactUs";
import userEvent from '@testing-library/user-event'

import GetInTouch from './GetInTouch';
import axios from "axios";
import { contactData, getInTouchData } from '../../Mock_Data';
import { Provider } from 'react-redux';
import { store } from "../../redux/store";

//mocking is a process of providing a dummy response if any ajax call is made
jest.mock("axios");


test("ContactUs", () => {
    axios.get.mockResolvedValue({ data: contactData });
    render(
        <Provider store={store}>
            <ContactUs data={contactData} />
        </Provider>
    );
    const todoList = waitFor(() => screen.findAllByTestId("contactUs"));
    expect(todoList).toBeDefined();
});


test("GetInTouch", () => {

    axios.post.mockResolvedValue({ data: getInTouchData });
    render(<GetInTouch />);

    const todoList = waitFor(() => screen.getByTestId("contact"));

    expect(todoList).toBeDefined();
});


test("onChange in GetInTouch Component", () => {

    render(<GetInTouch data={getInTouchData}/>)
    const newUser = {
        name: "Sravani",
        email: "abc@gmail.com",
        phone: "6756453424",
        message: "nice"
    }

    const nameInput = screen.getByPlaceholderText(/name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const phoneInput = screen.getByPlaceholderText(/phone/i);
    const msgInput = screen.getByPlaceholderText(/Message/i);

    userEvent.type(nameInput, newUser.name);
    userEvent.type(phoneInput, newUser.phone);
    userEvent.type(emailInput, newUser.email);
    userEvent.type(msgInput, newUser.number);
})

test("useEffect", () => {
    jest.mock('React', () => ({
        ...jest.requireActual('React'),
        useEffect: jest.fn(),
    }));
})



