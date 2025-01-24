import type { Product } from '@/types/product';
import axios from '@/lib/axios';

export const getProducts = async () => {
  try {
    const { data: products } = await axios.get<Product[]>('/products');

    return products;
  } catch (error) {
    return [];
  }
};
