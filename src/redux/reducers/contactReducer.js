import { FETCHED_CONTACT_DATA } from "../actionConstants";
const initialState = {
    contactData: []
};

const contactDataReducer = (state = initialState, action) => {
    switch (action.type) {
       
        case FETCHED_CONTACT_DATA:
            return {
                ...state,
                contactData: action.payload.contactData,
            };
        default:
            return state;
    }
};
export default contactDataReducer;
