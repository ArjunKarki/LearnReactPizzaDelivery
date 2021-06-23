import { ADD_TO_CART } from "../types/cartTypes";

const intState = {
  cartItems: [],
};

export const cartReducer = (state = intState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: [...state.cartItems, action.payload] };
    default:
      return state;
  }
};
