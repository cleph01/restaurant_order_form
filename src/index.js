import React from "react";
import ReactDOM from "react-dom";

//Start Apollo imports
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
//End Apollo imports

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

export const client = new ApolloClient({
    uri: "https://socialiite-api-staging.herokuapp.com/",
    request: (operation) => {
        const token = "order-online-test-token";
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : "",
            },
        });
    },
    playground: true,
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
