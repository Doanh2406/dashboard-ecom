import { ADD_REVIEW_FAIL, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, GET_REVIEW_FAIL, GET_REVIEW_REQUEST, GET_REVIEW_SUCCESS } from "../constants/reviewConstants";

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