import type { Product } from '@/types/product';
import Image from 'next/image';
import DiscountBadge from './discount-badge';
import DiscountPrices from './discount-prices';
import ProductStars from './product-stars';
import HoveredActions from './hovered-actions';
import FirstProductDetails from './first-product-details';

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
      <DiscountBadge className="absolute top-5 left-5" discount={discount} />
      <HoveredActions
        product={{
          id,
          name,
          price,
          discount,
          rating,
          reviews_number,
          summary,
          image,
        }}
      />
      <Image
        className={`object-contain w-full p-5 ${i === 0 ? 'h-96' : 'h-48'}`}
        src={image}
        alt={name}
        width={500}
        height={500}
      />
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
        <FirstProductDetails
          i={i}
          product={{
            id,
            summary,
            name,
            image,
            price,
            discount,
            rating,
            reviews_number,
          }}
        />
      </div>
    </div>
  );
}
