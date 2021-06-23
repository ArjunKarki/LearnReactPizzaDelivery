import axios from "axios";
import {
  GET_PIZZA_FAILED,
  GET_PIZZA_REQUEST,
  GET_PIZZA_SUCCESS,
} from "../types/pizzasTypes";

export const getPizza = () => async (dispatch) => {
  dispatch({ type: GET_PIZZA_REQUEST });

  try {
    const res = await axios.get("/api/pizza/getPizzas");
    console.log(res);
    dispatch({ type: GET_PIZZA_SUCCESS, payload: res.data });
  } catch (error) {
    console.log("error==>", error);
    dispatch({ type: GET_PIZZA_FAILED, payload: error });
  }
};
