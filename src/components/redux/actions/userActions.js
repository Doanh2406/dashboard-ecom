import Axios from "axios";
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants";

export const signUp = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST,
    payload: {
      name,
      email,
      password,
    },
  });
  try {
    const { data } = await Axios.post("/api/users", {
      name,
      email,
      password,
    });
    const userCart = data._id;
    const { cart } = await Axios.post("/api/carts/new", { userCart });
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: {
      email,
      password,
    },
  });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_SIGNOUT,
  });
};

export const updateUser =
  (
    userId,
    name,
    userName,
    birth,
    sex,
    role,
    status,
    department,
    phone,
    website,
    addressline1,
    addressline2,
    city,
    country,
    language,
    postcode,
    twiter,
    facebook,
    instagram,
    zalo
  ) =>
  async (dispatch) => {
    dispatch({
      type: USER_UPDATE_REQUEST,
      loading: true,
    });
    try {
      const { data } = await Axios.put(`/api/users/${userId}`, {
        name,
        userName,
        birth,
        sex,
        role,
        status,
        department,
        phone,
        website,
        addressline1,
        addressline2,
        city,
        country,
        language,
        postcode,
        twiter,
        facebook,
        instagram,
        zalo,
      });
      dispatch({
        type: USER_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const updateUserAva = (userId, userAva) => async (dispatch) => {
  dispatch({
    type: USER_UPDATE_REQUEST,
    loading: true,
  });
  try {
    const { data } = await Axios.put(`/api/users/${userId}`, userAva);
    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateUserPassword = (userId, password) => async (dispatch) => {
  dispatch({
    type: USER_UPDATE_REQUEST,
    loading: true,
  });
  try {
    const { data } = await Axios.put(`/api/users/${userId}`, { password });
    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
