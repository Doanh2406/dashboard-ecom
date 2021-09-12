import { PRODUCT_ADD_FAIL, PRODUCT_ADD_REQUEST, PRODUCT_ADD_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SEARCH_FAIL, PRODUCT_SEARCH_REQUEST, PRODUCT_SEARCH_SUCCESS } from "../constants/productConstants";

export const productListReducer = (state={products:[]}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return{
                loading:true
            }
        case PRODUCT_LIST_SUCCESS:
            return{
                loading:false,
                products:action.payload
            }
        case PRODUCT_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}
export const productAddReducer = (state={product:[]}, action)=>{
    switch (action.type) {
        case PRODUCT_ADD_REQUEST:
           return{
               loading:true
           }
        case PRODUCT_ADD_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        case PRODUCT_ADD_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
export const productDetailReducer = (state={product:[]},action)=>{
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return {
                loading:true
            }
         case PRODUCT_DETAIL_SUCCESS:
             return{
                 loading:false,
                 product:action.payload
             }   
        case PRODUCT_DETAIL_FAIL:
            return{
                loading:false,
                error:action.payload
            }     
        default:
           return state;
    }
}

export const productSearchReducer = (state={product:[]},action)=>{
    switch (action.type) {
        case PRODUCT_SEARCH_REQUEST:
            return {
                loading:true
            }
         case PRODUCT_SEARCH_SUCCESS:
             return{
                 loading:false,
                 product:action.payload
             }   
        case PRODUCT_SEARCH_FAIL:
            return{
                loading:false,
                error:action.payload
            }     
        default:
           return state;
    }
}
