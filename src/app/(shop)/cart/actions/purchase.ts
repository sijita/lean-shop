'use server';
import axios from '@/lib/axios';

export const proccessPurchase = async (
  products: {
    product: string;
    quantity: number;
  }[]
): Promise<{ type: 'success' | 'error'; message: string }> => {
  try {
    await axios.post('/purchase-products', products);

    return {
      type: 'success',
      message: 'Purchase successful',
    };
  } catch (error) {
    return {
      type: 'error',
      message: 'Purchase failed. Please try again',
    };
  }
};
