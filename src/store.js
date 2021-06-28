import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/autReducer";
import { cartReducer } from "./reducers/cartReducer";
import { pizzaReducer } from "./reducers/pizzaReducer";

const rootReducer = combineReducers({
  pizzas: pizzaReducer,
  carts: cartReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
