/* eslint-disable no-undef */
import { createStore, applyMiddleware } from "redux";
import reducer from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initiallState = {};

export const store = createStore(reducer, initiallState, composeWithDevTools(applyMiddleware(thunk)));
