import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state ={product:[]}, action)=>{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false};
        case PRODUCT_LIST_FAIL:
            return 
            default:
      return state;
    }}
