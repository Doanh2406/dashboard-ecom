import { GET_BOT_FAIL,GET_BOT_REQUEST,GET_BOT_SUCCESS} from '../constants/chatBotConstants'
import Axios from 'axios'

export const getChatBot = (text) =>async (dispatch)=>{
  console.log(text)
  dispatch({
    type:GET_BOT_REQUEST,
    loading:true,
  });
 
  try {
    const {data} = await Axios.post(`/api/bot/text`,{text})
    console.log(data)
    dispatch({
      type:GET_BOT_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: GET_BOT_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}