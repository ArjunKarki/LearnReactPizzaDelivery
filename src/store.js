import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { pizzaReducer } from "./reducers/pizzaReducer";

const rootReducer = combineReducers({
  pizzas: pizzaReducer,
  carts: cartReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
