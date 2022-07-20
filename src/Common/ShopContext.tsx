import {createContext} from 'react';
import useGetProducts from '../hooks/get-product-hook';

const ShopContext = createContext({
  products: [
    {id: 'p1', title: 'Gaming Mouse', price: 29.99},
    {id: 'p2', title: 'Harry Potter 3', price: 9.99},
    {id: 'p3', title: 'Used plastic bottle', price: 0.99},
    {id: 'p4', title: 'Half-dried plant', price: 2.99},
  ],
  cart: [],
  addProductToCart: products => {},
  removeProductFromCart: productId => {},
});

export default ShopContext;
