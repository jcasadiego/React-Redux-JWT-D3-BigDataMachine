import { combineReducers } from "redux";
import { alert } from "./alertReducer";
import { users } from "./usersReducer";
import { authentication } from "./authenticationReducer";

export default combineReducers({
    alert: alert,
    users: users,
    authentication: authentication
});