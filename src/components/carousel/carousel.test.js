import { render, screen } from '@testing-library/react';
import HomePageCarousel from './Carousel';

it('render homePage Carousal withour crashing', () => {
    render(<HomePageCarousel />)
})