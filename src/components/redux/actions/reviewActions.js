import Axios from "axios";
import { ADD_REVIEW_FAIL, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, GET_REVIEW_FAIL, GET_REVIEW_REQUEST, GET_REVIEW_SUCCESS } from "../constants/reviewConstants";

export const addReview = (productId,userId,userName,userAva,rating,userComment)=>async(dispatch)=>{
    const {data} = await Axios.post(`/api/products/${productId}/comment/add`,{userId,userName,userAva,rating,userComment});
    dispatch({
        type:ADD_REVIEW_REQUEST,
        loading:true,
    })
    try {
        dispatch({
            type:ADD_REVIEW_SUCCESS,
            payload:data
          })
    } catch (error) {
        dispatch({
            type: ADD_REVIEW_FAIL,
            payload: error.response &&
              error.response.data.message ?
              error.response.data.message :
              error.message
          })
    }
}
export const getReview = (productId)=>async(dispatch)=>{
    const {data} = await Axios.get(`/api/products/${productId}/comment`);
    console.log('chay mai')
    
    dispatch({
        type:GET_REVIEW_REQUEST,
        loading:true,
    })
    try {
        dispatch({
            type:GET_REVIEW_SUCCESS,
            payload:data
          })
    } catch (error) {
        dispatch({
            type: GET_REVIEW_FAIL,
            payload: error.response &&
              error.response.data.message ?
              error.response.data.message :
              error.message
          })
    }
}

