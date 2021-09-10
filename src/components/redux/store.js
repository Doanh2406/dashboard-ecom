import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { addReview } from "./actions/reviewActions";
import { addCartReducer, deleteCartReducer, getCartReducer } from "./reducers/cartReducers";
import { productAddReducer, productDetailReducer, productListReducer } from "./reducers/productReducers";
import { addReviewReducer, getReviewReducer } from "./reducers/reviewReducers";
import { userSigninReducer, userSignUpReducer, userUpdateReducer } from "./reducers/userReducers";

const initialState = {
  userSignIn:{
    userInfo:localStorage.getItem('userInfo')
    ?
    JSON.parse(localStorage.getItem('userInfo')):
    null,
  }
}

const reducer = combineReducers({
  productAdd:productAddReducer,
  productList:productListReducer,
  userSignUp: userSignUpReducer,
  userSignIn:userSigninReducer,
  productDetail:productDetailReducer,
  cart:addCartReducer,
  getCart:getCartReducer,
  deleteCart:deleteCartReducer,
  reviewAdd:addReviewReducer,
  reviewGet:getReviewReducer,
  userUpdate:userUpdateReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
)

export default store;