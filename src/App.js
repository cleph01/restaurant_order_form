import React from "react";
import Home from "./components/Home";

import { useQuery } from "@apollo/react-hooks";

import { getBusinessInfo } from "./queries/queries";

import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
    function ShowApp() {
        const { loading, error, data } = useQuery(getBusinessInfo, {
            variables: { businessId: 1 },
        });

        if (loading) return <CircularProgress />;

        if (error) return <p>Error ... {error}</p>;

        return <Home businessData={data.getBusinessInfo} />;
    }

    return <>{ShowApp()}</>;
}

export default App;
