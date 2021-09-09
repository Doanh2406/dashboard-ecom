import { ADD_CART_SUCCESS, DELETE_CART_FAIL, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS } from "../constants/cartConstants";

export const addCartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_CART_SUCCESS:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product)
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
   
        default:
            return state;
    }
}
export const getCartReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CART_REQUEST:
            return {
                loading:true, 
            }
        case GET_CART_SUCCESS:
            return action.payload

        case GET_CART_FAIL:
            return {
                loading:false
            }
        default:
           return state
    }
}

export const deleteCartReducer = (state = [], action) => {
    switch (action.type) {
        case DELETE_CART_REQUEST:
            return {
                loading:true, 
            }
        case DELETE_CART_SUCCESS:
            return action.payload

        case DELETE_CART_FAIL:
            return {
                loading:false
            }
        default:
           return state
    }
}