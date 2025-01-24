'use client';
import Link from 'next/link';
import ProductRow from './product-row';
import { FaArrowLeft } from 'react-icons/fa6';
import { useCartStore } from '@/store/use-cart-store';

export default function ProductsResume() {
  const { items } = useCartStore((state) => ({
    items: state.items,
  }));

  return (
    <div className="products-resume-container">
      <h1>Shopping Card</h1>
      {items.length > 0 ? (
        <div className="products-resume">
          <table>
            <thead>
              <tr className="table-header">
                <th className="first-th">Products</th>
                <th className="right-th">Price</th>
                <th className="center-th">Quantity</th>
                <th className="right-th">Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <ProductRow key={item.id} {...item} />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6}>
                  <hr className="border-gray-200" />
                  <div className="action-buttons">
                    <Link href="/" className="return-button">
                      <FaArrowLeft color="#2DA5F3" />
                      <span>RETURN TO SHOP</span>
                    </Link>
                    <button className="update-button">UPDATE CART</button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <Link href="/" className="return-button">
            <FaArrowLeft color="#2DA5F3" />
            <span className="text-[#2DA5F3]">RETURN TO SHOP</span>
          </Link>
        </div>
      )}
    </div>
  );
}
