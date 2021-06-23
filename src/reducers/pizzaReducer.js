import {
  GET_PIZZA_FAILED,
  GET_PIZZA_REQUEST,
  GET_PIZZA_SUCCESS,
} from "../types/pizzasTypes";

const pizzaState = {
  pizzas: [],
  error: null,
};
export const pizzaReducer = (state = pizzaState, action) => {
  switch (action.type) {
    case GET_PIZZA_REQUEST: {
      return { ...state };
    }
    case GET_PIZZA_SUCCESS: {
      return { ...state };
    }
    case GET_PIZZA_FAILED: {
      return { ...state };
    }
    default:
      return state;
  }
};
