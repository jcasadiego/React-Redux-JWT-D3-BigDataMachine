import { userConstants } from "../../constantes";
import { alertAcion } from "./";
import { userService } from "../../services";
import { history } from "../../helpers";

export const userActions = {
    login,
    logout,
    getAll
};

function login(username, password) {

    return dispatch  => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/Home');
                    history.go()
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertAcion.error(error));
                }
            );
    };

    function request(user) {
        return {
            type: userConstants.LOGIN_REQUEST, 
            user
        };
    };

    function success(user) {
        return {
            type: userConstants.LOGIN_SUCCESS,
            user
        };
    };

    function failure(error) {
        return {
            type: userConstants.LOGIN_FAILURE, 
            error
        };
    };
};

function logout() {
    userService.logout();
    history.push('/');
    history.go();
    return {
        type: userConstants.LOGOUT
    };
};

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => {
                    dispatch(failure(error)),
                        dispatch(alertAcion.error(error))
                }
            );
    };

    function request() {
        return {
            type: userConstants.GETALL_REQUEST
        };
    };

    function success(users) {
        return {
            type: userConstants.GETALL_SUCCESS,
            users
        };
    };

    function failure(error) {
        return {
            type: userConstants.GETALL_FAILURE,
            error
        };
    };
};