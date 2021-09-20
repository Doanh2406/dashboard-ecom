import Axios from "axios"
import { ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS } from "../constants/orderConstants"

export const orderList = ()=>async(dispatch)=>{
    dispatch({
        type: ORDER_LIST_REQUEST,
        loading:true
    })
    try {
        const {data} = await Axios.get('/api/orders/list')
        dispatch({
            typer: ORDER_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ORDER_LIST_FAIL,
            payload: error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        })
    }
}