import type { Product } from '@/types/product';
import axios from '@/lib/axios';

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const { data: product } = await axios.get<Product>(`/products/${id}`);

    return product;
  } catch (error) {
    return null
  }
}
