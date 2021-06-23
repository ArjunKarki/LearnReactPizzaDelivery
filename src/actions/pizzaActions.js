import axios from "axios";
import {
  GET_PIZZA_FAILED,
  GET_PIZZA_REQUEST,
  GET_PIZZA_SUCCESS,
} from "../types/pizzasTypes";

export const getPizza = () => (dispatch) => {
  dispatch({ type: GET_PIZZA_REQUEST });

  try {
    const res = axios.get("/api/getPizzas");
    console.log(res);
    dispatch({ type: GET_PIZZA_SUCCESS });
  } catch (error) {
    console.log("error==>", e);
    dispatch({ type: GET_PIZZA_FAILED });
  }
};
