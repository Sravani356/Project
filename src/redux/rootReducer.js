/* eslint-disable no-undef */

import { combineReducers } from "redux";
import contactDataReducer from "./reducers/contactReducer";
import productDataReducer from "./reducers/productReducer";
import aboutDataReducer from "./reducers/aboutReducer";


const rootReducer = combineReducers({
    productDetails: productDataReducer,
    aboutDetails: aboutDataReducer,
    contactDetails: contactDataReducer,

});

export default rootReducer;
