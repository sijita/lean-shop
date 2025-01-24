import { useCartStore } from '@/store/use-cart-store';
import { Product } from '@/types/product';
import toast from 'react-hot-toast';

export default function useAddToCart() {
  const { addToCart } = useCartStore((state) => ({
    addToCart: state.addToCart,
  }));

  const handleAddToCart = (
    product: Product,
    quantity = 1,
    setQuantity?: (quantity: number) => void
  ) => {
    addToCart({ ...product, quantity });
    setQuantity?.(1);
    toast.success('Product added to cart');
  };

  return {
    handleAddToCart,
  };
}
