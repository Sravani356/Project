import { FETCHED_PRODUCT_DATA } from "../actionConstants";
const initialState = {
    productData: [],
};

const productDataReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCHED_PRODUCT_DATA:
            return {
                ...state,
                productData: action.payload.productData,
            };
        default:
            return state;
    }
};

export default productDataReducer;
