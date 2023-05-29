import { BLOG, FAQ, FAQBYCATEGORY, FAQBYID } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getBlog = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBlog();
        dispatch({ type: BLOG, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getFAQ = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFAQ();
        dispatch({ type: FAQ, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getFAQById = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchFAQById(id);
        dispatch({ type: FAQBYID, payload: data });
    } catch (error) {
        console.log(error);
    }
}