import axios from "axios";

export const FETCH_PRODUCT_DATA_START = "FETCH_PRODUCT_DATA_START";
export const FETCH_PRODUCT_DATA_SUCCESS = "FETCH_PRODUCT_DATA_SUCCESS";
export const FETCH_PRODUCT_DATA_ERROR = "FETCH_PRODUCT_DATA_ERROR";

//fetch images function
export function fetchProductData() {
    return (dispatch) => {
        //Set isLoading to True
        dispatch({ type: FETCH_PRODUCT_DATA_START });

        //axios call to API
        axios
            .get(``)
            .then((res) => {
                //console log result
                console.log(res, "Axios-Call-Success");

                dispatch({
                    type: FETCH_PRODUCT_DATA_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.log(err, "Axios-Error");
                dispatch({ type: FETCH_PRODUCT_DATA_ERROR, payload: err });
            });
    };
}
