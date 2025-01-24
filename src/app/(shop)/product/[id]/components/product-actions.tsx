'use client';
import QuantitySelector from '@/components/product/quantity-selector';
import { CgShoppingCart } from 'react-icons/cg';
import { useState } from 'react';

export default function ProductActions() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-5 flex-wrap">
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <button
        onClick={() => alert('Add to cart clicked')}
        className="xl:w-[310px] flex items-center justify-center gap-2 bg-[#FA8232] p-3 rounded font-semibold w-full cursor-pointer"
      >
        <span className="text-white">ADD TO CARD</span>
        <CgShoppingCart size={20} color="white" />
      </button>
      <button
        onClick={() => alert('Buy now clicked')}
        className="rounded border border-orange-500 p-3 font-semibold text-orange-500 hover:bg-orange-50 flex-1 cursor:pointer"
      >
        BUY NOW
      </button>
    </div>
  );
}
