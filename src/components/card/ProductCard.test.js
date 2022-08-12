import { render, screen, waitFor } from '@testing-library/react';
import ProductCard from './ProductCard';
import { Data } from '../../Mock_Data'
import { MemoryRouter } from 'react-router-dom';

const data = [{
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

it('render homePage Carousal without crashing', () => {
    render(
        <MemoryRouter>
            <ProductCard item={Data} />
        </MemoryRouter>
    )
});


