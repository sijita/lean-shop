'use client';
import type { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import { CgShoppingCart } from 'react-icons/cg';
import { BiHeart } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import DiscountBadge from './discount-badge';
import AddToCartButton from './add-to-cart-button';
import DiscountPrices from './discount-prices';
import ProductStars from './product-stars';

export function ProductCard({
  i,
  id,
  name,
  price,
  discount,
  rating,
  reviews_number,
  summary,
  image,
}: Product & { i: number }) {
  return (
    <div
      className={`relative flex flex-col items-center bg-white border border-[#f5f5f5] ${
        i === 0 ? 'md:row-span-2' : ''
      } group`}
    >
      <DiscountBadge discount={discount} />
      <div className="p-1">
        <div
          className={`absolute inset-x-0 top-0 h-0 bg-black/20 transition-all duration-300 ${
            i === 0 ? 'group-hover:h-[30%]' : 'group-hover:h-[60%]'
          } flex items-center gap-2 justify-center opacity-0 group-hover:opacity-100`}
        >
          <button className="rounded-full bg-[#FA8232] p-2 cursor-pointer">
            <BiHeart size={20} color="white" />
          </button>
          <Link href={`/cart`} className="rounded-full bg-white p-2">
            <CgShoppingCart size={20} color="black" />
          </Link>
          <Link href={`/product/${id}`} className="rounded-full bg-white p-2">
            <BsEye size={20} color="black" />
          </Link>
        </div>
        <Image
          className="object-contain w-full h-48"
          src={image}
          alt={name}
          width={216}
          height={188}
        />
      </div>
      <div className="flex flex-col p-3 w-full gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <ProductStars rating={rating} />
            <span className="text-lg text-[#77878F]">
              {reviews_number.toLocaleString()}
            </span>
          </div>
          <h3 className="text-lg font-medium text-[#191C1F] text-pretty truncate">
            {name}
          </h3>
        </div>
        <DiscountPrices price={price} discount={discount} />
        {i === 0 && (
          <p className="text-sm text-[#5F6C72] truncate">{summary}</p>
        )}
        <div className="flex flex-col gap-2">
          {i === 0 && (
            <AddToCartButton
              className="w-auto flex items-center justify-center gap-2 bg-[#FA8232] px-4 py-2 rounded font-semibold"
              onClick={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  );
}
