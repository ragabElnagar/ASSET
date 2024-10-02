import {
  FETCH_FAIL,
  FETCH_SUCCESS,
  FETCH_DATA,
} from "./types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_FAIL:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
