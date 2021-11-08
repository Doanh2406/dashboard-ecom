import {NEW_CONVERSATION_FAIL,NEW_CONVERSATION_REQUEST,NEW_CONVERSATION_SUCCESS, GET_CONVERSATION_FAIL,GET_CONVERSATION_REQUEST,GET_CONVERSATION_SUCCESS} from '../constants/conversationConstants'
import Axios from 'axios'

export const getConversation = (userId) =>async (dispatch)=>{
 
  dispatch({
    type:GET_CONVERSATION_REQUEST,
    loading:true,
  });
  const {data} = await Axios.get(`/api/conversation/${userId}`)
  try {
    dispatch({
      type:GET_CONVERSATION_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: GET_CONVERSATION_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}
export const newConversation = (senderId,receiverId) =>async (dispatch)=>{
  const {data} = await Axios.post(`/api/conversation/`,{senderId,receiverId})
  dispatch({
    type:NEW_CONVERSATION_REQUEST,
    loading:true,
  });
  
  try {
    dispatch({
      type:NEW_CONVERSATION_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: NEW_CONVERSATION_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}

