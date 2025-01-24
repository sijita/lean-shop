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
    <tr className="align-middle">
      <td className="py-4 px-5 flex items-center gap-4">
        <button
          onClick={handleRemoveItem}
          className="text-gray-400 hover:text-gray-500 cursor-pointer"
        >
          <BiX size={20} />
        </button>
        <Image
          src={image}
          alt={name}
          className="h-16 w-16 rounded-lg object-cover"
          width={64}
          height={64}
        />
        <span className="text-sm text-pretty">{name}</span>
      </td>
      <td className="py-4 px-5 text-right">
        <DiscountPrices price={price} discount={discount} />
      </td>
      <td className="py-4 px-5 text-center">
        <div className="col-span-2">
          <QuantitySelector
            quantity={quantity}
            setQuantity={handleQuantityChange}
          />
        </div>
      </td>
      <td className="py-4 px-5 text-right font-medium">
        <div className="col-span-2 text-right font-medium">
          {(discountedPrice * quantity).toFixed(2)}
        </div>
      </td>
    </tr>
  );
}
