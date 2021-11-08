import { GET_MESSAGE_FAIL, GET_MESSAGE_REQUEST, GET_MESSAGE_SUCCESS, NEW_MESSAGE_FAIL, NEW_MESSAGE_REQUEST, NEW_MESSAGE_SUCCESS } from '../constants/messageConstants'
import Axios from 'axios'


export const getMessage = (conversationId) =>async (dispatch)=>{

  dispatch({
    type:GET_MESSAGE_REQUEST,
    loading:true,
  });
  
  try {
    const {data} = await Axios.get(`/api/message/${conversationId}`)
    dispatch({
      type:GET_MESSAGE_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: GET_MESSAGE_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}
export const newMessage = (conversationId,sender,text) =>async (dispatch)=>{
  const {data} = await Axios.post(`/api/message/`,{conversationId,sender,text})
  dispatch({
    type:NEW_MESSAGE_REQUEST,
    loading:true,
  });
  
  try {
    dispatch({
      type:NEW_MESSAGE_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: NEW_MESSAGE_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}
