import { FETCH_DATA, FETCH_FAIL, FETCH_SUCCESS } from "./types";
import axios from "axios";


export const fetchData = () => {
  return {
    type: FETCH_DATA,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchDataFail = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
};
export const fetchItems = () => {
  return async (dispatch) => {
    dispatch(fetchData());
    try {
      const res = await axios.get(`./data/data.json`);
      dispatch(fetchDataSuccess(res.data));
    } catch (error) {
      dispatch(fetchDataFail(error?.response?.data?.error));
    }
  };
};
