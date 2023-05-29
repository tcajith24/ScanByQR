import { CAR, CARCATALOG, CARCATALOGBYID, EAUCTIONBIKE, EAUCTIONCAR, EAUCTIONDETAIL } from '../constants/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case CAR:
            return action.payload;
        case EAUCTIONBIKE:
            return {
                ...state,
                eAuctionBike: action.payload.filter((item) => item.assetCategory.toLowerCase() === 'bike')
            };
        case EAUCTIONCAR:
            return {
                ...state,
                eAuctionCar: action.payload.filter((item) => item.assetCategory.toLowerCase() === 'car')
            };
        case EAUCTIONDETAIL:
            return {
                ...state,
                eAuctionDetail: action.payload
            };
        case CARCATALOG:
            return action.payload
        case CARCATALOGBYID:
            return {
                ...state,
                carCatalogById: action.payload
            };
        default:
            return state;
    }
}