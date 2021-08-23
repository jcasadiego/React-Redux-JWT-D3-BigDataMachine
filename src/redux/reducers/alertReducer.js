import { alertConstants } from "../../constantes";

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alerta-exito',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alerta-peligro',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
};