import './product.scss';
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
    <div className={`product-card group ${i === 0 && 'first-item'}`}>
      <DiscountBadge className="discount-badge" discount={discount} />
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
        className={`image ${i === 0 ? 'first-item' : 'not-first-item'}`}
        src={image}
        alt={name}
        width={500}
        height={500}
      />
      <div className="info">
        <div className="name-section">
          <div className="reviews">
            <ProductStars rating={rating} />
            <span className="number">({reviews_number.toLocaleString()})</span>
          </div>
          <h3 className="name">{name}</h3>
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
