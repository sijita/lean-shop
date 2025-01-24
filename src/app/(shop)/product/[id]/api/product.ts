import type { Product } from '@/types/product';
import axios from '@/lib/axios';

export async function getProduct(id: string) {
  try {
    const { data: product } = await axios.get<Product>(`/products/${id}`);

    return product;
  } catch (error) {
    return [];
  }
}
