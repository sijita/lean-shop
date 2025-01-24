'use client';
import DiscountPrices from '@/components/product/discount-prices';
import QuantitySelector from '@/components/product/quantity-selector';
import { Product } from '@/types/product';
import Image from 'next/image';
import { BiX } from 'react-icons/bi';
import useUpdateCart from '@/app/(shop)/cart/hooks/use-update-cart';

export default function ProductRow({
  id,
  name,
  price,
  image,
  discount,
  quantity: initialQuantity,
}: Product & { quantity: number }) {
  const { handleRemoveItem, quantity, handleQuantityChange, discountedPrice } =
    useUpdateCart({
      id,
      price,
      discount,
      initialQuantity,
    });

  return (
    <tr className="product-row-container">
      <td className="product-td">
        <button onClick={handleRemoveItem} className="delete-button">
          <BiX size={20} />
        </button>
        <Image src={image} alt={name} width={64} height={64} />
        <span className="name">{name}</span>
      </td>
      <td className="discount-td">
        <DiscountPrices price={price} discount={discount} />
      </td>
      <td className="quantity-td">
        <QuantitySelector
          quantity={quantity}
          setQuantity={handleQuantityChange}
        />
      </td>
      <td className="subtotal-td">{(discountedPrice * quantity).toFixed(2)}</td>
    </tr>
  );
}
