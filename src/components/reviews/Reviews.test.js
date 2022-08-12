/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render, screen } from "@testing-library/react";
import { Data } from "../../Mock_Data";
import Reviews from "./Reviews";


it("checking rendering", () => {
  render(<Reviews data={Data} />);

  const el = screen.getByText(/Akash/i);

  expect(el).toBeInTheDocument();
});
