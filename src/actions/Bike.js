import * as api from "../api/index.js";
import { BIKECATALOG, BIKECATALOGBYID } from "../constants/actionTypes.js";

export const BikeCatalog = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBikeCatalog();
        dispatch({ type: BIKECATALOG, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const BikeCatalogById = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchBikeCatalogById(id);
        dispatch({ type: BIKECATALOGBYID, payload: data });
    } catch (error) {
        console.log(error);
    }
}