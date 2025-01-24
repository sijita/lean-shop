'use client';
import useAddToCart from '@/hooks/use-add-to-cart';
import type { Product } from '@/types/product';
import Link from 'next/link';
import { BiHeart } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { CgShoppingCart } from 'react-icons/cg';

export default function HoveredActions({ product }: { product: Product }) {
  const { handleAddToCart } = useAddToCart();

  return (
    <div
      className={`absolute inset-x-0 top-0 h-0 bg-black/20 transition-all duration-300 group-hover:h-[60%] flex items-center gap-2 justify-center opacity-0 group-hover:opacity-100`}
    >
      <button className="rounded-full bg-[#FA8232] p-2 cursor-pointer">
        <BiHeart size={20} color="white" />
      </button>
      <button
        onClick={() => handleAddToCart(product)}
        className="rounded-full bg-white p-2 cursor-pointer"
      >
        <CgShoppingCart size={20} color="black" />
      </button>
      <Link
        href={`/product/${product.id}`}
        className="rounded-full bg-white p-2"
      >
        <BsEye size={20} color="black" />
      </Link>
    </div>
  );
}
