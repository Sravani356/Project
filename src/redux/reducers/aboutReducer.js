import { FETCHED_ABOUT_DATA } from "../actionConstants";
const initialState = {
    aboutData: []
};

const aboutDataReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCHED_ABOUT_DATA:
            return {
                ...state,
                aboutData: action.payload.aboutData,
            };
        default:
            return state;
    }
};
export default aboutDataReducer;
