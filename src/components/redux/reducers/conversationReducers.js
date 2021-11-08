import {NEW_CONVERSATION_FAIL,NEW_CONVERSATION_REQUEST,NEW_CONVERSATION_SUCCESS, GET_CONVERSATION_FAIL,GET_CONVERSATION_REQUEST,GET_CONVERSATION_SUCCESS} from '../constants/conversationConstants'


export const getConversationReducer = (state ={} , action) => {
  switch (action.type) {
      case GET_CONVERSATION_REQUEST:
          return {
              loading:true, 
          }
      case GET_CONVERSATION_SUCCESS:
          return {
              data:action.payload
          }

      case GET_CONVERSATION_FAIL:
          return {
              loading:false
          }
      default:
         return state
  }
}
export const newConversationReducer = (state={},action)=>{
  switch (action.type) {
    case NEW_CONVERSATION_REQUEST:
        return {
            loading:true, 
        }
    case NEW_CONVERSATION_SUCCESS:
        return action.payload

    case NEW_CONVERSATION_FAIL:
        return {
            loading:false
        }
    default:
       return state
}
}
