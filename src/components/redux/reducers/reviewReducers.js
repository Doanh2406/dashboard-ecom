import { ADD_RESPONSE_FAIL, ADD_RESPONSE_REQUEST, ADD_RESPONSE_SUCCESS, ADD_REVIEW_FAIL, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, DELETE_COMMENT_FAIL, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, GET_REVIEW_FAIL, GET_REVIEW_REQUEST, GET_REVIEW_SUCCESS } from "../constants/reviewConstants";

export const addReviewReducer = (state ={} , action)=>{
    switch (action.type) {
        case ADD_REVIEW_REQUEST:
            return{
                loading:true
            }
        case ADD_REVIEW_SUCCESS:
            return{
                loading:false,
                review:action.payload
            }
        case ADD_REVIEW_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
           return state
    }
}

export const getReviewReducer = (state ={} , action)=>{
    switch (action.type) {
        case GET_REVIEW_REQUEST:
            return{
                loading:true
            }
        case GET_REVIEW_SUCCESS:
            return{
                loading:false,
                review:action.payload
            }
        case GET_REVIEW_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
           return state
    }
}
export const addResponseReducer = (state ={} , action)=>{
    switch (action.type) {
        case ADD_RESPONSE_REQUEST:
            return{
                loading:true
            }
        case ADD_RESPONSE_SUCCESS:
            return{
                loading:false,
                response:action.payload
            }
        case ADD_RESPONSE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
           return state
    }
}

export const deleteCommentReducer = (state ={} , action)=>{
    switch (action.type) {
        case DELETE_COMMENT_REQUEST:
            return{
                loading:true
            }
        case DELETE_COMMENT_SUCCESS:
            return{
                loading:false,
                reivew:action.payload
            }
        case DELETE_COMMENT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
           return state
    }
}