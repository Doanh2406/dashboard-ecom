import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { addCartReducer, deleteCartReducer, getCartReducer } from "./reducers/cartReducers";
import { productAddReducer, productDeleteReducer, productDetailReducer, productEditReducer, productListReducer, productSearchReducer } from "./reducers/productReducers";
import { addReviewReducer, getReviewReducer } from "./reducers/reviewReducers";
import { userListReducer, userListSearchReducer, userSigninReducer, userSignUpReducer, userUpdateReducer } from "./reducers/userReducers";

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  productAdd: productAddReducer,
  productList: productListReducer,
  userSignUp: userSignUpReducer,
  userSignIn:userSigninReducer,
  productDetail:productDetailReducer,
  cart:addCartReducer,
  getCart:getCartReducer,
  deleteCart:deleteCartReducer,
  reviewAdd:addReviewReducer,
  reviewGet:getReviewReducer,
  userUpdate:userUpdateReducer,
  productSearch:productSearchReducer,
  productEdit:productEditReducer,
  userList:userListReducer,
  userListSearch:userListSearchReducer,
  productDelete:productDeleteReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
