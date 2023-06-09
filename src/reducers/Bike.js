import { BIKECATALOG, BIKECATALOGBYID } from "../constants/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case BIKECATALOG:
            return action.payload;
        case BIKECATALOGBYID:
            return {
                ...state,
                bikeCatalogById: action.payload
            };
        default:
            return state;
    }
}