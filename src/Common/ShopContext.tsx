import {createContext} from 'react';

const ShopContext = createContext({
  products: [],
  cart: [],
  addProductToCart: products => {},
  removeProductFromCart: productId => {},
});

export default ShopContext;
