'use client';
import { useCartStore } from '@/store/use-cart-store';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

export default function CartCount() {
  const { items } = useCartStore((state) => ({
    items: state.items,
  }));

  return (
    <Link href="/cart" className="cart">
      <FiShoppingCart size={28} />
      <div className="cart-count">{items.length}</div>
    </Link>
  );
}
