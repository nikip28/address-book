import { FETCH_CONTACT } from "../actions/types"
 
export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CONTACT:
            return action.payload;
        default: 
            return state;
    }
}