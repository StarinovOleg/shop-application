import axios from 'axios';
interface AddUser {
  phone: string;
  firstName: string;
  order: string[];
}
export const CustomerService = {
  async addcustomer({phone, firstName, order}: AddUser) {
    const data = {
      phone,
      firstName,
      order,
    };
    return axios
      .post(`https://62cf6dde486b6ce8265685db.mockapi.io/users`, {
        phone: data.phone,
        firstName: data.firstName,
        order: data.order,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => res.data);
  },
};
