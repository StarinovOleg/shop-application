import {useQuery} from 'react-query';

import {ProductService} from '../../api/product-service';

const useProductId = (id: string | undefined) => {
  const {data} = useQuery(['product', id], () =>
    ProductService.getProductId(id),
  );
  return data;
};

export default useProductId;

/**Custom hook for get post - use for refractoring */
