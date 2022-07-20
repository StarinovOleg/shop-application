import React, {useReducer} from 'react';
import ShopContext from './ShopContext';
import {shopReducer, ADD_PRODUCT, REMOVE_PRODUCT} from './CartReducer';
import useGetProducts from '../hooks/get-product-hook';

const GlobalState = props => {
  const [cartState, dispatch] = useReducer(shopReducer, {cart: []});
  const products = useGetProducts();
  const addProductToCart = products => {
    setTimeout(() => {
      dispatch({type: ADD_PRODUCT, products: products});
    }, 200);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      dispatch({type: REMOVE_PRODUCT, productId: productId});
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
