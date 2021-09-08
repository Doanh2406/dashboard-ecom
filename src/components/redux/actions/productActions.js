import Axios from "axios"
import { PRODUCT_ADD_FAIL, PRODUCT_ADD_REQUEST, PRODUCT_ADD_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
    loading: true
  })
  try {
    const { data } = await Axios.get('/api/products/list')
   
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message
    })
  }
}
export const addProduct = (formData) => async (dispatch) => {
  dispatch({
    type: PRODUCT_ADD_REQUEST,
    loading: true
  })
  try {
    const { data } = await Axios.post('/api/products/add', formData)
    dispatch({
      type: PRODUCT_ADD_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_ADD_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}

export const detailProduct = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAIL_REQUEST,
    loading: true
  })
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}