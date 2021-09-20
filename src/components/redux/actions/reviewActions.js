import Axios from "axios";
import { ADD_RESPONSE_FAIL, ADD_RESPONSE_REQUEST, ADD_RESPONSE_SUCCESS, ADD_REVIEW_FAIL, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, DELETE_COMMENT_FAIL, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, GET_REVIEW_FAIL, GET_REVIEW_REQUEST, GET_REVIEW_SUCCESS } from "../constants/reviewConstants";

export const addReview = (productId,userId,userName,userAva,rating,userComment)=>async(dispatch)=>{
    dispatch({
        type:ADD_REVIEW_REQUEST,
        loading:true,
    })
    try {
        const {data} = await Axios.post(`/api/products/${productId}/comment/add`,{userId,userName,userAva,rating,userComment});

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
    dispatch({
        type:GET_REVIEW_REQUEST,
        loading:true,
    })
    try {
        const {data} = await Axios.get(`/api/products/${productId}/comment`);
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

export const addResponse = (productId,userId,userName,userAva,userComment,stt)=>async(dispatch)=>{
    dispatch({
        type:ADD_RESPONSE_REQUEST,
        loading:true,
    })
    try {
        const {data} = await Axios.post(`/api/products/${productId}/response/add`,{userId,userName,userAva,userComment,stt});
        dispatch({

            type:ADD_RESPONSE_SUCCESS,
            payload:data
          })
    } catch (error) {
        dispatch({
            type: ADD_RESPONSE_FAIL,
            payload: error.response &&
              error.response.data.message ?
              error.response.data.message :
              error.message
          })
    }
}

export const deleteComment = (productId,id)=>async(dispatch)=>{
    dispatch({
        type:DELETE_COMMENT_REQUEST,
        loading:true,
    })
    try {
        const {data} = await Axios.delete(`/api/products/${productId}/comment/delete?id=${id}`);
        dispatch({
            type:DELETE_COMMENT_SUCCESS,
            payload:data
          })
    } catch (error) {
        dispatch({
            type: DELETE_COMMENT_FAIL,
            payload: error.response &&
              error.response.data.message ?
              error.response.data.message :
              error.message
          })
    }
}