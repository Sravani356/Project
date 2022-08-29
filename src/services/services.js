/* eslint-disable no-undef */
import axios from "axios";
import { fetchedAboutData, fetchedContactData, fetchedProductData } from "../redux/actions";

import { store } from "../redux/store";

const { REACT_APP_API_URL: apiBaseurl } = process.env;

export const fetchProductData = async () => {
    const response = await axios.get(`${apiBaseurl}/data`);
    store.dispatch(fetchedProductData(response.data));
};

export const getAboutData = async () => {
    const res = await axios.get(`${apiBaseurl}/aboutData`);
    store.dispatch(fetchedAboutData(res.data));
};

export const getContactData = async () => {
    const res = await axios.get(`${apiBaseurl}/contactData`);
    store.dispatch(fetchedContactData(res.data));
};






