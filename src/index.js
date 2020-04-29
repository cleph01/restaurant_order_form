import React from "react";
import ReactDOM from "react-dom";
//Start Redux imports
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
//End Redux imports

//Start import reducers
import { reducer } from "./reducers/Reducer";

//End import reducers
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// const rootReducer = combineReducers({
//     businessDataReducer,
//     productDataReducer,
// });

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
