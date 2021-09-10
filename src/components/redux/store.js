import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  addCartReducer,
  deleteCartReducer,
  getCartReducer
} from "./reducers/cartReducers";
import {
  productAddReducer,
  productDetailReducer,
  productListReducer
} from "./reducers/productReducers";
import { userSigninReducer, userSignUpReducer } from "./reducers/userReducers";

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
  userSignIn: userSigninReducer,
  productDetail: productDetailReducer,
  cart: addCartReducer,
  getCart: getCartReducer,
  deleteCart: deleteCartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
