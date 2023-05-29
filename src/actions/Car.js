import { CARCATALOG, CARCATALOGBYID, EAUCTIONBIKE, EAUCTIONCAR, EAUCTIONDETAIL } from "../constants/actionTypes";
import * as api from "../api/index.js";
export const getEAuctionBike = () => async (dispatch) => {
    try {
        const { data } = await api.fetcheAuctions();
        dispatch({ type: EAUCTIONBIKE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getEAuctionCar = () => async (dispatch) => {
    try {
        const { data } = await api.fetcheAuctions();
        dispatch({ type: EAUCTIONCAR, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getEAuctionById = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetcheAuctionById(id);
        dispatch({ type: EAUCTIONDETAIL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getCarCatalogs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCarCatalogs();
        dispatch({ type: CARCATALOG, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getCarCatalogById = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchCarCatalogById(id);
        dispatch({ type: CARCATALOGBYID, payload: data });
    } catch (error) {
        console.log(error);
    }
}