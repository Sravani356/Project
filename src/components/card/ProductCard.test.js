import { render } from '@testing-library/react';
import ProductCard from './ProductCard';
import { Data } from '../../Mock_Data'
import { MemoryRouter } from 'react-router-dom';


it('render homePage Carousal without crashing', () => {
    render(
        <MemoryRouter>
            <ProductCard item={Data} />
        </MemoryRouter>
    )
});


