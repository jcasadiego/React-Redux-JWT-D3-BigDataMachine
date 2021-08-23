import { userConstants } from '../../constantes';

export function users(state = {}, action){
    switch (action.type){
        case userConstants.GETALL_REQUEST:
            return{
                loading: true
            };
        case userConstants.GETALL_SUCCESS:
            return{
                items: action.users
            };
        case userConstants.LOGIN_FAILURE:
            return{
                error: action.error
            };
        default: 
            return state
    };
};