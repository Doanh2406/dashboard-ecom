import { GET_BOT_FAIL,GET_BOT_REQUEST,GET_BOT_SUCCESS} from '../constants/chatBotConstants'


export const getChatBotReducer = (state ={} , action) => {
  switch (action.type) {
      case GET_BOT_REQUEST:
          return {
              loading:true, 
          }
      case GET_BOT_SUCCESS:
          return {
              chatBot:action.payload
          }

      case GET_BOT_FAIL:
          return {
              loading:false
          }
      default:
         return state
  }
}