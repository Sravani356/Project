import { render } from "@testing-library/react";
import Home from "./Home";

describe("testing HomePage Component", () => {
    it("render HomePage wihout crashing", () => {
        render(<Home />)
    })
})