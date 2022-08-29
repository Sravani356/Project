
import { FETCHED_ABOUT_DATA, FETCHED_CONTACT_DATA, FETCHED_PRODUCT_DATA } from "./actionConstants";

export const fetchedAboutData = (aboutData) => {
    return {
        type: FETCHED_ABOUT_DATA,
        payload: {
            aboutData,
        },
    };
};


export const fetchedContactData = (contactData) => {
    return {
        type: FETCHED_CONTACT_DATA,
        payload: {
            contactData,
        },
    };
};


export const fetchedProductData = (productData) => {
    return {
        type: FETCHED_PRODUCT_DATA,
        payload: {
            productData,
        },
    };
};








