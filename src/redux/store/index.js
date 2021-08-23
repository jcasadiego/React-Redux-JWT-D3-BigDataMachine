import { createStore, applyMiddleware } from "redux";
import Reducers from '../reducers/index';
import ThunkMiddleware  from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export const Store = createStore(
    Reducers, 
    applyMiddleware(
        ThunkMiddleware,
        loggerMiddleware
    )
);

