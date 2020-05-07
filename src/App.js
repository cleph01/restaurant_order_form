import React from "react";
import Home from "./components/Home";

import { graphql } from "react-apollo";

import { getBusinessInfo } from "./queries/queries";

import CircularProgress from "@material-ui/core/CircularProgress";

function App(props) {
    
    function ShowApp() {
        
        const { getBusinessInfo } = props.data;

        if (getBusinessInfo) {
            return <Home businessData={getBusinessInfo} />;
        } else {
            return <CircularProgress />;
        }
    }

    console.log(props, "app props");

    return <>{ShowApp()}</>;
}


export default graphql(getBusinessInfo, {
    options: (props) => {
        return {
            variables: {
                businessId: 1,
            },
        };
    },
})(App);
