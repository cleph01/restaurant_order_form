import axios from "axios";

export const FETCH_BUSINESS_DATA_START = "FETCH_BUSINESS_DATA_START";
export const FETCH_BUSINESS_DATA_SUCCESS = "FETCH_BUSINESS_DATA_SUCCESS";
export const FETCH_BUSINESS_DATA_ERROR = "FETCH_BUSINESS_DATA_ERROR";

//fetch images function
export function fetchBusinessData() {
    return (dispatch) => {
        //Set isLoading to True
        dispatch({ type: FETCH_BUSINESS_DATA_START });

        //axios call to API
        axios
            .get(``)
            .then((res) => {
                //console log result
                console.log(res, "Axios-Call-Success");

                dispatch({
                    type: FETCH_BUSINESS_DATA_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.log(err, "Axios-Error");
                dispatch({ type: FETCH_BUSINESS_DATA_ERROR, payload: err });
            });
    };
}
