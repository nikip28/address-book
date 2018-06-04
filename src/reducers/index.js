import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import contReducer from "./contReducer";
import editReducer from "./editReducer";

export default combineReducers({
    cont: contReducer,
    form: reduxForm,
    edit: editReducer
});