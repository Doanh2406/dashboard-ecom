/** @format */

import Axios from 'axios';
import {
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_SEARCH_FAIL,
  USER_SEARCH_REQUEST,
  USER_SEARCH_SUCCESS,
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
} from '../constants/userConstants';

export const signUp = (firstName, lastName,email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST,
    payload: {
      firstName,
      lastName,
      email,
      password,
    },
  });
  try {
    const {data} = await Axios.post('/api/users/signup', {
      firstName,
      lastName,
      email,
      password,
    });
    const userCart = data._id;
    console.log(data)
    await Axios.post('/api/carts/new', {userCart});
    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
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
    const {data} = await Axios.post('/api/users/signin', {email, password});
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
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
  localStorage.removeItem('userInfo');
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
      const {data} = await Axios.put(`/api/users/${userId}`, {
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
    const {data} = await Axios.put(`/api/users/${userId}`, userAva);
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
    const {data} = await Axios.put(`/api/users/${userId}`, {password});
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
export const listUser = (page, limit, sort) => async (dispatch) => {
  dispatch({
    type: USER_LIST_REQUEST,
    loading: true,
  });
  try {
    const {data} = await Axios.get(
      `/api/users/list?${
        page
          ? 'page=' + page + '&'
          : limit
          ? 'litmit=' + limit + '&'
          : sort
          ? 'sort=' + sort
          : ''
      }`
    );
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listUserSearch = (search) => async (dispatch) => {
  dispatch({
    type: USER_SEARCH_REQUEST,
    loading: true,
  });
  try {
    const {data} = await Axios.get(
      `/api/users/search/${search ? search : ''}`
    );
    dispatch({
      type: USER_SEARCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userDetail = (id) => async (dispatch) => {
  dispatch({
    type: USER_DETAIL_REQUEST,
    loading: true,
  });
  try {
    const {data} = await Axios.get(`/api/users/${id}`);
    dispatch({
      type: USER_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
