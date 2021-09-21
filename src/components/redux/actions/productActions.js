import Axios from "axios"
import { PRODUCT_ADD_FAIL, PRODUCT_ADD_REQUEST, PRODUCT_ADD_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SEARCH_FAIL, PRODUCT_SEARCH_REQUEST, PRODUCT_SEARCH_SUCCESS } from "../constants/productConstants"


//list all product
export const listProducts = (userCreate,sort,skip) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
    loading: true
  })
  try {
    const { data } = await Axios.post('/api/products/list',{userCreate,sort,skip})
   
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message
    })
  }
}
//list product  search 
export const listProductsSearch = (userCreate,search) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
    loading: true,
  });
  try {
    
    const { data } = await Axios.post('/api/products/list',{userCreate,search})
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message
    })
  }
}
//list product category
export const listProductsCategory = (userCreate,category) =>async(dispatch) =>{
  dispatch({
    type: PRODUCT_LIST_REQUEST,
    loading: true
  })
  try {
    const { data } = await Axios.post('/api/products/list',{userCreate,category})
   
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message
    })
  }
}
//list product Price
export const listProductsPrice = (userCreate,price) =>async(dispatch) =>{
  dispatch({
    type: PRODUCT_LIST_REQUEST,
    loading: true
  })
  try {
    const { data } = await Axios.post('/api/products/list',{userCreate,price})
   
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};//list product Price
export const listProductsColor = (userCreate,color) =>async(dispatch) =>{
  dispatch({
    type: PRODUCT_LIST_REQUEST,
    loading: true
  })
  try {
    const { data } = await Axios.post('/api/products/list',{userCreate,color})
   
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};
export const addProduct = (formData) => async (dispatch) => {
  dispatch({
    type: PRODUCT_ADD_REQUEST,
    loading: true,
  });
  try {
    const { data } = await Axios.post("/api/products/add", formData);
    dispatch({
      type: PRODUCT_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailProduct = (productId) => async (dispatch) => {
  dispatch({
    type: PRODUCT_DETAIL_REQUEST,
    loading: true,
  });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}
export const searchProduct = (search,userCreate) =>async(dispatch)=>{
  dispatch({
    type: PRODUCT_SEARCH_REQUEST,
    loading: true
  })
  try {

    const { data } = await Axios.post(`/api/products/search`,{search,userCreate});
    
    dispatch({
      type: PRODUCT_SEARCH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_SEARCH_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}


export const editProduct = (id,name,category,sdescription,price,countInStock,fearture,sale,description,color) =>async(dispatch)=>{
  dispatch({
    type: PRODUCT_SEARCH_REQUEST,
    loading: true
  })
  try {
    const { data } = await Axios.put(`/api/products/${id}/edit`,{name,category,sdescription,price,countInStock,fearture,sale,description,color});
    dispatch({
      type: PRODUCT_SEARCH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_SEARCH_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}
export const editProductImage = (id,image) =>async(dispatch)=>{
  dispatch({
    type: PRODUCT_SEARCH_REQUEST,
    loading: true
  })
  try {
    const { data } = await Axios.put(`/api/products/${id}/edit`,image);
    dispatch({
      type: PRODUCT_SEARCH_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_SEARCH_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}
export const deleteProduct = (id)=>async(dispatch)=>{
  dispatch({
    type: PRODUCT_DELETE_REQUEST,
    loading: true
  })
  try {
    const { data } = await Axios.delete(`/api/products/${id}`);
  
    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: error.response &&
        error.response.data.message ?
        error.response.data.message :
        error.message
    })
  }
}