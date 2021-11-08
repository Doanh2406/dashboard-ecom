import {NEW_MESSAGE_FAIL,NEW_MESSAGE_REQUEST,NEW_MESSAGE_SUCCESS, GET_MESSAGE_FAIL,GET_MESSAGE_REQUEST,GET_MESSAGE_SUCCESS} from '../constants/messageConstants'


export const getMessageReducer = (state ={} , action) => {
  switch (action.type) {
      case GET_MESSAGE_REQUEST:
          return {
              loading:true, 
          }
      case GET_MESSAGE_SUCCESS:
          return {
              data:action.payload
          }

      case GET_MESSAGE_FAIL:
          return {
              loading:false
          }
      default:
         return state
  }
}
export const newMessageReducer = (state={},action)=>{
  switch (action.type) {
    case NEW_MESSAGE_REQUEST:
        return {
            loading:true, 
        }
    case NEW_MESSAGE_SUCCESS:
        return action.payload

    case NEW_MESSAGE_FAIL:
        return {
            loading:false
        }
    default:
       return state
}
}
