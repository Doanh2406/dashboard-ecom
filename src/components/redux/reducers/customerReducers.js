import { GET_CUSTOMERS_FAIL, GET_CUSTOMERS_SUCCESS, GET_CUSTOMERS_REQUEST } from '../constants/customerConstants';

export const getCustomersReducer = (state ={} , action) => {
  switch (action.type) {
      case GET_CUSTOMERS_REQUEST:
          return {
              loading:true, 
          }
      case GET_CUSTOMERS_SUCCESS:
          return {
            list:action.payload
          }

      case GET_CUSTOMERS_FAIL:
          return {
              loading:false
          }
      default:
         return state
  }
}
