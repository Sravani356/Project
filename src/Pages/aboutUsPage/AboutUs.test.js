import { render, screen } from '@testing-library/react';
import AboutUs from './aboutUs';

it('render homePage Carousal withour crashing', () => {
    render(<AboutUs />)
})