import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/cartTypes";

const intState = {
  cartItems: [],
};

export const cartReducer = (state = intState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let isExist = state.cartItems.find(
        (cart) => cart._id === action.payload._id
      );

      if (isExist) {
        return {
          cartItems: state.cartItems.map((cart) =>
            cart._id === action.payload._id ? action.payload : cart
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, action.payload] };
      }
    case REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter(
          (cart) => cart._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
