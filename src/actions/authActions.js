import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../types/authTypes";
export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });

  try {
    const res = await axios.post("/api/users/register", { user });
    console.log("res=>", res.data);
    dispatch({ type: REGISTER_USER_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: REGISTER_USER_FAILED, payload: error });
  }
};

export const loginUser =
  ({ email, password, history }) =>
  async (dispatch) => {
    dispatch({ type: LOGIN_USER_REQUEST });

    try {
      const res = await axios.post("/api/users/login", { email, password });
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
      // history.push("/");
    } catch (err) {
      console.log("err=>", err);
      dispatch({ type: LOGIN_USER_FAILED, payload: err });
    }
  };
