import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.carts);
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);

  const onMinus = (cart) => {
    if (cart.quantity > 1) {
      dispatch(addToCart(cart, cart.quantity - 1, cart.varient));
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6  text-left">
        <h2 style={{ fontSize: "45px" }}>My Cart</h2>
        {cartItems.map((cart, i) => (
          <div key={i} className="d-flex">
            <div className="w-100 m-1" style={{ textAlign: "left" }}>
              <h1>{cart.name}</h1>
              <h1>
                Price : {cart.quantity} * {cart.prices[0][cart.varient]} ={" "}
                {cart.price}
              </h1>
              <h1 style={{ display: "inline" }}>Quantity</h1>
              <i
                onClick={() =>
                  dispatch(addToCart(cart, cart.quantity + 1, cart.varient))
                }
                className="fa fa-plus"
                aria-hidden="true"
              />
              <b>{cart.quantity}</b>
              <i
                onClick={() => onMinus(cart)}
                className="fa fa-minus"
                aria-hidden="true"
              />
              <hr />
            </div>
            <div className="w-100">
              <img
                alt={cart.image}
                src={cart.image}
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <div className="w-100 mt-5">
              <i
                onClick={() => dispatch(removeFromCart(cart))}
                className="fa fa-trash"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        ))}
      </div>
      <div className="col-md-4 text-end">
        <h2 style={{ fontSize: "45px" }}>Sub Total : {subTotal} Ks</h2>
        <button className="btn">check out</button>
      </div>
    </div>
  );
}

export default CartScreen;
