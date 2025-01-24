import { useFormStatus } from 'react-dom';
import { proccessPurchase } from '@/app/(shop)/cart/actions/purchase';
import { useCartStore } from '@/store/use-cart-store';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function useProccessPurchase() {
  const [loading, setLoading] = useState(false);
  const { items, clearCart } = useCartStore((state) => ({
    items: state.items,
    clearCart: state.clearCart,
  }));

  const itemsToPurchase = items.map((item) => ({
    product: item.id,
    quantity: item.quantity,
  }));

  const handleProccessPurchase = async () => {
    setLoading(true);
    const { type, message } = await proccessPurchase(itemsToPurchase);

    if (type === 'success') {
      setLoading(false);
      toast.success(message);
      clearCart();
    } else {
      setLoading(false);
      toast.error(message);
    }
  };

  return {
    handleProccessPurchase,
    pending: loading,
  };
}
