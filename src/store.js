import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { pizzaReducer } from "./reducers/pizzaReducer";

const rootReducer = combineReducers({
  pizzas: pizzaReducer,
});
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
