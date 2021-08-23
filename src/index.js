import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

//redux
import { Provider } from 'react-redux'
import { Store } from "./redux/store/index.js";

//fake backend
import { configureFakeBackend } from './helpers/fake-backend';
configureFakeBackend();

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById("root")
);