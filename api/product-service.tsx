import axios from 'axios';

export const ProductService = {
  async getProducts() {
    return axios
      .get<any[]>(`https://62cf6dde486b6ce8265685db.mockapi.io/products`)
      .then(res => res.data);
  },
};
