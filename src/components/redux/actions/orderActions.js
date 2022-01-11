import Axios from "axios"
import { ORDER_DETAIL_FAIL, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS } from "../constants/orderConstants"

export const orderList = ()=>async(dispatch)=>{
    dispatch({
        type: ORDER_LIST_REQUEST,
        loading:true
    })
    
    try {
        const {data} = await Axios.get('/api/order/61cd31348fbb09d42f17a535')
        dispatch({
            type: ORDER_LIST_SUCCESS,
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

export const orderDetail = (id) =>async(dispatch)=>{
    dispatch({
        type: ORDER_DETAIL_REQUEST,
        loading:true
    })
    try {
        const {data} = await Axios.get(`/api/orders/${id}`)
        dispatch({
            typer: ORDER_DETAIL_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ORDER_DETAIL_FAIL,
            payload: error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        })
    }
}