import { BLOG, FAQ, FAQBYID } from "../constants/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case BLOG:
            return action.payload;
        case FAQ:
            return action.payload;
        case FAQBYID:
            return action.payload;
        default:
            return state;
    }
}