import { SEARCH_FAIL, SEARCH_REQUEST, SEARCH_SUCCESS } from "../constants/searchConstants"
import Axios from "axios";
export const searchHeader = (search)=>async(dispatch)=>{
    dispatch({
        type:SEARCH_REQUEST,
        loading:true
    })
    try {
        
        const dataP = await Axios.get(`/api/products/header/search?search=${search}`);
        const dataU = await Axios.get(`/api/users/header/search?search=${search}`);
        
        dispatch({
          type: SEARCH_SUCCESS,
          payload: {dataP:dataP.data,dataU:dataU.data}
        })
      } catch (error) {
        dispatch({
          type: SEARCH_FAIL,
          payload: error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        })
      }
}