import { ListGroup } from "react-bootstrap";
import {
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../types/authTypes";

const initState = {
  isLoading: false,
  error: null,
  user: null,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
    case LOGIN_USER_REQUEST:
      return { ...state, isLoading: true };

    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      console.log(action.payload);
      return { ...state, isLoading: false, user: action.payload };

    case REGISTER_USER_FAILED:
    case LOGIN_USER_FAILED:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
