import { USER_DETAIL_FAIL, USER_DETAIL_REQUEST, USER_DETAIL_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_SEARCH_FAIL, USER_SEARCH_REQUEST, USER_SEARCH_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SIGNUP_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/userConstants";


export const userSignUpReducer = (state ={}, action)=>{
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        loading: true
      }
    case USER_SIGNUP_SUCCESS:
      return{
        loading:false,
        userInfo:action.payload
      }
    case USER_SIGNUP_FAIL:
      return{
        loading:false,
        error:action.payload
      }
    case USER_SIGNOUT:
      return{

      }

    default:
      return state;
  }
}
export const userSigninReducer = (state={},action)=>{
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return{
        loading:true
      }
    case USER_SIGNIN_SUCCESS:
      return{
        loading:false,
        userInfo:action.payload
      }
    case USER_SIGNIN_FAIL:
      return{
        loading:false,
        error:action.payload
      }
    case USER_SIGNOUT:
      return{};
    default:
      return state;
  }
}
export const userUpdateReducer = (state={},action)=>{
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return{
        loading:true
      }
    case USER_UPDATE_SUCCESS:
      return{
        loading:false,
        userInfo:action.payload
      }
      case USER_UPDATE_FAIL:
        return{
          loading:false,
          error:action.payload
        }
    default:
      return state;
  }
}
export const userListReducer = (state={},action)=>{
  switch (action.type) {
    case USER_LIST_REQUEST:
      return{
        loading:true
      }
    case USER_LIST_SUCCESS:
      return{
        loading:false,
        list:action.payload
      }
      case USER_LIST_FAIL:
        return{
          loading:false,
          error:action.payload
        }
    default:
      return state;
  }
}
export const userListSearchReducer = (state={},action)=>{
  switch (action.type) {
    case USER_SEARCH_REQUEST:
      return{
        loading:true
      }
    case USER_SEARCH_SUCCESS:
      return{
        loading:false,
        list:action.payload
      }
      case USER_SEARCH_FAIL:
        return{
          loading:false,
          error:action.payload
        }
    default:
      return state;
  }
}

export const userDetailReducer = (state={},action)=>{
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return{
        loading:true
      }
    case USER_DETAIL_SUCCESS:
      return{
        loading:false,
        user:action.payload
      }
      case USER_DETAIL_FAIL:
        return{
          loading:false,
          error:action.payload
        }
    default:
      return state;
  }
}