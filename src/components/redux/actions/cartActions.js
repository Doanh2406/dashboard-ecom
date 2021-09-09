import {  ADD_CART_SUCCESS, DELETE_CART_FAIL, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS } from "../constants/cartConstants"
import Axios from 'axios'


export const addToCart = (productId, qty,userCart) => async (dispatch) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  const payload = {
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    product: data._id,
    qty
  }
   await Axios.put('/api/carts/',{
    userCart:userCart,
    cart:payload
  })
  
  dispatch({
    type: ADD_CART_SUCCESS,
    payload
  })
  const {datas} = await Axios.post('/api/carts/cart',{userCart})
 
  // localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItem))
}


export const getCart = (userCart) =>async (dispatch)=>{
  const {data} = await Axios.post('/api/carts/cart',{userCart})
  dispatch({
    type:GET_CART_REQUEST,
    loading:true,
  });
  
  try {
    dispatch({
      type:GET_CART_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: GET_CART_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }


}

export const deleteCart = (userCart,id)=>async(dispatch)=>{
  const {data} = await Axios.put('/api/carts/delete',{userCart,id})
  dispatch({
    type:DELETE_CART_REQUEST,
    loading:true,
  });
  
  try {
    dispatch({
      type:DELETE_CART_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: DELETE_CART_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}