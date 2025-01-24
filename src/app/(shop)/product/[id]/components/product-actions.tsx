'use client';
import QuantitySelector from '@/components/product/quantity-selector';
import { useState } from 'react';
import type { Product } from '@/types/product';
import useAddToCart from '@/hooks/use-add-to-cart';
import AddToCartButton from '@/components/product/add-to-cart-button';

export default function ProductActions({ product }: { product: Product }) {
  const { handleAddToCart } = useAddToCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-5 flex-wrap">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <AddToCartButton
        onClick={() => handleAddToCart(product, quantity, setQuantity)}
        className="xl:w-[310px] flex flex-row-reverse items-center justify-center gap-2 bg-[#FA8232] p-3 rounded font-semibold w-full"
      />
      <button
        onClick={() => alert('Buy now clicked')}
        className="rounded border border-orange-500 p-3 font-semibold text-orange-500 hover:bg-orange-50 flex-1 cursor:pointer"
      >
        BUY NOW
      </button>
    </div>
  );
}
