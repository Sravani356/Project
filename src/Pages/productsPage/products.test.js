import { render, waitFor, screen } from "@testing-library/react";
import { Data } from "../../Mock_Data";
import axios from "axios";
import Products from './Products';
import MockAdapter from "axios-mock-adapter";
import { act } from "react-test-renderer";

//mocking is a process of providing a dummy response if any ajax call is made
jest.mock("axios");

//whenever we use axios we need to provide the dummy data of same format for testing
const info = [{
    id: 1,
    brand: "Roadster",
    category: "Men Pure Cotton Casual Shirt",
    img: "Assets/images/images/Product1.png",
    description: "Black checked opaque Casual shirt ,has a spread collar, button placket, 1 patch pocket, long roll-up sleeves, curved hem",
    fit: "Slim fit",
    price: "Rs. 519/-",
    discount: 0,
    ratingsCount: 4,
    ratingsValue: 350,
    availibilityCount: 5,
    cartCount: 0,
    reviews: [
        {
            name: "Sravani",
            email: "sravs@gmail.com",
            phone: "9998897888",
            rating: 3,
            date: "2021-09-20T04:21:35.155Z"
        }
    ],

    id: 2,
    brand: "Mast & Harbour",
    category: "Printed",
    img: "Assets/images/images/Product2.png",
    description: "Red and Blue checked casual shirt, has a spread collar, long sleeves, button placket, and curved hem",
    fit: "Regular fit",
    price: "Rs. 800/-",
    discount: 0,
    ratingsCount: 4,
    ratingsValue: 350,
    availibilityCount: 5,
    cartCount: 0,
    reviews: [
        {
            name: "Akash",
            email: "as@gmail.com",
            phone: "9998897888",
            rating: 3,
            date: "2021-09-20T04:21:35.155Z"
        },

    ]
}]
test("Products", () => {
    axios.get.mockResolvedValue({ data: Data });
    render(<Products />);

    const todoList = waitFor(() => screen.findAllByTestId("data"));

    expect(todoList).toBeDefined();
});

// //TEST CASE FOR API CALL
// const fetchProductDetail = () => {
//     axios
//         .get(`http://localhost:3000/data`)
//         .then((response) => {
//             act(() => {
//                 setData(response.data);
//             })
//         })
//         .catch((err) => err);
// };

// describe("testing projectApi", () => {
//     test('should return response records', () => {
//         let response = new Response(undefined, {
//             status: 200,
//             statusText: "OK",
//         });
//         response = () => Promise.resolve(MOCK_PROJECTS);
//         jest
//             .spyOn(window, "fetch")
//             .mockImplementation(() => Promise.resolve(response));

//         return fetchProductDetail()
//             // .get()
//             .then((data) => expect(data).toEqual(Data));
//     });
test("useEffect", () => {
    jest.mock('React', () => ({
        ...jest.requireActual('React'),
        useEffect: jest.fn(),
    }));
    // useEffect.mock.calls[0]();
})
// });

// it('render homePage Carousal without crashing', async () => {
//     render(<Products />);
//     info.forEach((item) => {
//         expect(screen.getByText(item.price)).toBeInTheDocument();
//     });


// })


