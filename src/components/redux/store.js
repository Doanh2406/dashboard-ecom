import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userSignUpReducer } from "./reducers/userReducers";

const initialState = {
  userSignin:{
    userInfo:localStorage.getItem('userInfo')
    ?
    JSON.parse(localStorage.getItem('userInfo')):null,

  }
}

const reducer = combineReducers({
  userSignUp: userSignUpReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store;