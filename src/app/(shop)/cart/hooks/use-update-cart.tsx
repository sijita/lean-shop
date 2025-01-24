import { useCartStore } from '@/store/use-cart-store';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function useUpdateCart({
  id,
  price,
  discount,
  initialQuantity,
}: {
  id: string;
  price: number;
  discount: number;
  initialQuantity: number;
}) {
  const { updateQuantity, removeFromCart } = useCartStore((state) => ({
    updateQuantity: state.updateQuantity,
    removeFromCart: state.removeFromCart,
  }));
  const [quantity, setQuantity] = useState(initialQuantity);
  const discountedPrice = price - (price * discount) / 100;

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = () => {
    removeFromCart(id);
    toast.success('Product removed from cart');
  };

  return {
    handleQuantityChange,
    handleRemoveItem,
    discountedPrice,
    quantity,
    setQuantity,
  };
}
