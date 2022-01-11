import Axios from 'axios'
import { GET_CUSTOMERS_FAIL, GET_CUSTOMERS_SUCCESS, GET_CUSTOMERS_REQUEST } from '../constants/customerConstants';
export const getCustomersAction = () =>async (dispatch)=>{
  const {data} = await Axios.get('/api/customers/')
  dispatch({
    type:GET_CUSTOMERS_REQUEST,
    loading:true,
  });
  try {
    dispatch({
      type:GET_CUSTOMERS_SUCCESS,
      payload:data
    })
  } catch (error) {
    dispatch({
      type: GET_CUSTOMERS_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }


}