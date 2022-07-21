import {createContext} from 'react';

const ShopContext = createContext({
  products: [],
  cart: [],
  addProductToCart: (_products: any) => {},
  removeProductFromCart: (_productId: any) => {},
});

export default ShopContext;
