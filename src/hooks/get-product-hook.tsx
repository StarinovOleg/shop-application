import {useQuery} from 'react-query';

import {ProductService} from '../../api/product-service';
const useGetProducts = () => {
  const {data: products} = useQuery('products', () =>
    ProductService.getProducts(),
  );
  return products;
};

export default useGetProducts;
