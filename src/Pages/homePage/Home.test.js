import { render } from "@testing-library/react";
import Home from "./Home";
import { Provider } from 'react-redux';
import { store } from "../../redux/store";


describe("testing HomePage Component", () => {
    it("render HomePage wihout crashing", () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )
    })
})