import axios from "axios"
import { USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/constants"


export const signUp = (name,email,password) => async(dispatch)=>{
dispatch({
  type: USER_SIGNUP_REQUEST,
  payload:{
    name,
    email,
    password
  }
})
try {
  const { data } = await axios.post('/api/users/signup',{
    name,email,password
  })
  dispatch({
    type:USER_SIGNUP_SUCCESS,
    payload:data
  });
  
 localStorage.setItem('userInfo',JSON.stringify(data))

} catch (error) {
  dispatch({
    type: USER_SIGNUP_FAIL,
    payload:error.response && 
    error.response.data.message ?
    error.response.data.message:
    error.message
  })
}

}