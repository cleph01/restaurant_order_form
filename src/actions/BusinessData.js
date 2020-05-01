import { useQuery } from "@apollo/react-hooks";
import { getBusinessInfo } from "../queries/queries";

export const FETCH_BUSINESS_DATA_START = "FETCH_BUSINESS_DATA_START";
export const FETCH_BUSINESS_DATA_SUCCESS = "FETCH_BUSINESS_DATA_SUCCESS";
export const FETCH_BUSINESS_DATA_ERROR = "FETCH_BUSINESS_DATA_ERROR";

//fetch images function
export function fetchBusinessData() {
    return (dispatch) => {
        const { loading, error, data } = useQuery(getBusinessInfo, {
            variables: { businessId: 1 },
        });

        if (loading) return dispatch({ type: FETCH_BUSINESS_DATA_START });

        if (error)
            return dispatch({
                type: FETCH_BUSINESS_DATA_ERROR,
                payload: error,
            });

        if (data) {
            console.log(data, "action call");

            dispatch({
                type: FETCH_BUSINESS_DATA_SUCCESS,
                payload: data,
            });
        }
    };
}
