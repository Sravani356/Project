import { render, screen, fireEvent } from '@testing-library/react';
import TabMenu from './TabMenu';

test('render TabMenu without crashing', () => {
    render(<TabMenu />)
    const allBtn = screen.getByTestId("all_button");
    expect(allBtn).toBeInTheDocument();
    fireEvent.click(allBtn);

    const regularButton = screen.getByTestId("reg_button");
    expect(regularButton).toBeInTheDocument();
    fireEvent.click(regularButton);

    const plainButton = screen.getByTestId("plain_button");
    expect(plainButton).toBeInTheDocument();
    fireEvent.click(plainButton);

    const printedButton = screen.getByTestId("print_button");
    expect(printedButton).toBeInTheDocument();
    fireEvent.click(printedButton);
})