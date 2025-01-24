'use client';
import QuantitySelector from '@/components/product/quantity-selector';
import { useState } from 'react';
import type { Product } from '@/types/product';
import useAddToCart from '@/hooks/use-add-to-cart';
import AddToCartButton from '@/components/product/add-to-cart-button';
import { useRouter } from 'next/navigation';

export default function ProductActions({ product }: { product: Product }) {
  const { push } = useRouter();
  const { handleAddToCart } = useAddToCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-actions-container">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddToCartButton
        className="add-to-cart-button"
        onClick={() => handleAddToCart(product, quantity, setQuantity)}
      />
      <button
        className="buy-now-button"
        onClick={() => {
          handleAddToCart(product, quantity, setQuantity);
          push('/cart');
        }}
      >
        BUY NOW
      </button>
    </div>
  );
}
