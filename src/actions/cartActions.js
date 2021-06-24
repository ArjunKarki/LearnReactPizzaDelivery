import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/cartTypes";

export const addToCart = (pizza, quantity, varient) => (dispatch) => {
  let cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    varient,
    quantity: Number(quantity),
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  if (quantity > 10) {
    alert("You cann't order more than 10 pizzas");
    return;
  }
  dispatch({ type: ADD_TO_CART, payload: cartItem });
};

export const removeFromCart = (cart) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: cart });
};
