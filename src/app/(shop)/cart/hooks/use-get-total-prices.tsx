import { useCartStore } from '@/store/use-cart-store';

export default function useGetTotalPrices() {
  const { items } = useCartStore((state) => ({
    items: state.items,
  }));

  const subtotal = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalDiscount = items.reduce((acc, item) => {
    return acc + ((item.price * item.discount) / 100) * item.quantity;
  }, 0);

  const total = subtotal - totalDiscount;

  return {
    subtotal,
    totalDiscount,
    total,
  };
}
