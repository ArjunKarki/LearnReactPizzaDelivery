import {
  GET_PIZZA_FAILED,
  GET_PIZZA_REQUEST,
  GET_PIZZA_SUCCESS,
} from "../types/pizzasTypes";

const pizzaState = {
  pizzas: [],
  error: null,
  isLoading: false,
};
export const pizzaReducer = (state = pizzaState, action) => {
  switch (action.type) {
    case GET_PIZZA_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_PIZZA_SUCCESS: {
      return { ...state, pizzas: action.payload, isLoading: false };
    }
    case GET_PIZZA_FAILED: {
      return { ...state, error: action.payload, isLoading: false };
    }
    default:
      return state;
  }
};
