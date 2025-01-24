'use client';
import { useCartStore } from '@/store/use-cart-store';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

export default function CartCount() {
  const { items } = useCartStore();

  return (
    <Link href="/cart" className="relative">
      <FiShoppingCart size={28} />
      <div className="flex items-center justify-center h-5 w-5 p-[1px] rounded-full absolute -top-1 -right-2 bg-white text-[#1B6392] text-xs font-medium">
        {items.length}
      </div>
    </Link>
  );
}
