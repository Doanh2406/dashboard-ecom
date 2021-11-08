import { SEARCH_FAIL, SEARCH_REQUEST, SEARCH_SUCCESS } from "../constants/searchConstants";

export const searchReducer = (state={dataP:[],dataU:[]}, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return{
                loading:true
            }
        case SEARCH_SUCCESS:
            return{
                loading:false,
                dataP:action.payload.dataP,
                dataU:action.payload.dataU
            }
        case SEARCH_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}