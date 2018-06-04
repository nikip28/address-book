import { EDIT_CONTACT, SAVE_EDIT_CONTACT } from "../actions/types"
 
export default function(state = [], action) {
    switch (action.type) {
        case EDIT_CONTACT: 
            return action.payload;
        case SAVE_EDIT_CONTACT: 
            return action.payload;
        default: 
            return state;
    }
}