'use client';
import Link from 'next/link';
import ProductRow from './product-row';
import { FaArrowLeft } from 'react-icons/fa6';
import { useCartStore } from '@/store/use-cart-store';

export default function ProductsResume() {
  const { items, removeFromCart, clearCart, updateQuantity } = useCartStore(
    (state) => ({
      items: state.items,
      removeFromCart: state.removeFromCart,
      clearCart: state.clearCart,
      updateQuantity: state.updateQuantity,
    })
  );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="border border-gray-200 min-w-[300px] w-full">
      <h1 className="text-xl font-medium p-5 border-b border-gray-200">
        Shopping Card
      </h1>
      {items.length > 0 ? (
        <div className="h-full w-full overflow-x-auto flex flex-col gap-5">
          <table className="w-full">
            <thead>
              <tr className="text-sm uppercase text-gray-500 bg-[#E4E7E9]">
                <th className="py-3 px-5 text-left w-6/12">Products</th>
                <th className="py-3 px-5 text-right w-2/12">Price</th>
                <th className="py-3 px-5 text-center w-2/12">Quantity</th>
                <th className="py-3 px-5 text-right w-2/12">Sub-total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 p-5">
              {items.map((item) => (
                <ProductRow key={item.id} {...item} />
              ))}
            </tbody>
          </table>
          <hr className="border-gray-200" />
          <div className="w-full flex items-center gap-3 justify-between flex-wrap p-5">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 rounded border border-[#2DA5F3] hover:bg-blue-50 px-6 py-2 max-md:w-full"
            >
              <FaArrowLeft color="#2DA5F3" />
              <span className="text-[#2DA5F3]">RETURN TO SHOP</span>
            </Link>
            <button className="rounded border border-[#2DA5F3] px-6 py-2 text-sm text-[#2DA5F3] hover:bg-blue-50 max-md:w-full">
              UPDATE CART
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[50vh]">
          <span className="text-lg text-gray-500">Your cart is empty</span>
        </div>
      )}
    </div>
  );
}
