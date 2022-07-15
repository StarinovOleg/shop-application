import {useMutation, useQueryClient} from 'react-query';

import {CustomerService} from '../../api/customer-service';
const useAddCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation((data: any) => CustomerService.addcustomer(data), {
    onSettled: () => {
      queryClient.invalidateQueries('data');
    },
  });
};

export default useAddCustomer;
