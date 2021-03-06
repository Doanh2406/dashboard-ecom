import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { addCartReducer, deleteCartReducer, getCartReducer } from "./reducers/cartReducers";
import { getChatBotReducer } from "./reducers/chatBotReducers";
import { getConversationReducer, newConversationReducer } from "./reducers/conversationReducers";
import { getCustomersReducer } from "./reducers/customerReducers";
import { getMessageReducer, newMessageReducer } from "./reducers/messageReducers";
import { orderDetailReducer, orderListReducer } from "./reducers/orderReducers";
import { productAddReducer, productDeleteReducer, productDetailReducer, productEditReducer, productListReducer, productSearchReducer } from "./reducers/productReducers";
import { addResponseReducer, addReviewReducer, deleteCommentReducer, getReviewReducer } from "./reducers/reviewReducers";
import { searchReducer } from "./reducers/searchReducers";
import { userDetailReducer, userListReducer, userListSearchReducer, userSigninReducer, userSignUpReducer, userUpdateReducer } from "./reducers/userReducers";

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  
  userSignUp: userSignUpReducer,
  userSignIn:userSigninReducer,
  userUpdate:userUpdateReducer,
  userList:userListReducer,
  userListSearch:userListSearchReducer,
  userDetail:userDetailReducer,
  
  productDetail:productDetailReducer,
  productSearch:productSearchReducer,
  productEdit:productEditReducer,
  productAdd: productAddReducer,
  productList: productListReducer,
  productDelete:productDeleteReducer,

  cart:addCartReducer,
  getCart:getCartReducer,
  deleteCart:deleteCartReducer,


  reviewAdd:addReviewReducer,
  reviewGet:getReviewReducer,
  responseAdd:addResponseReducer,
  deleteComment:deleteCommentReducer,


  search:searchReducer,

  orderList:orderListReducer,
  orderDetail:orderDetailReducer,
  

  getConversation:getConversationReducer,
  newConversation:newConversationReducer,
  getMessage:getMessageReducer,
  newMessage:newMessageReducer,

  getCustomers:getCustomersReducer,

  chatBot: getChatBotReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
