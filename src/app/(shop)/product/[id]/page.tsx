import './styles/product-details.scss';
import Breadcrumb from '@/components/ui/breadcrumb/breadcrumb';
import { getProduct } from './api/product';
import Image from 'next/image';
import ProductStars from '@/components/product/product-stars';
import ProductInfo from './components/product-info';
import DiscountPrices from '@/components/product/discount-prices';
import ProductDetails from './components/product-details';
import ProductActions from './components/product-actions';
import DiscountBadge from '@/components/product/discount-badge';

type ProductDetailProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;
  const product = await getProduct(id);

  if (!product) return null;

  return (
    <div className="product-details-container">
      <Breadcrumb alternativeText={product.name} />
      <div className="product-section">
        <div className="grid">
          <div className="image">
            <Image src={product.image} alt={product.name} fill />
          </div>
          <div className="info-section">
            <div className="first-section">
              <div className="reviews-section">
                <ProductStars rating={product.rating} />
                <span className="reviews-number">
                  {product.reviews_number} Reviews
                </span>
              </div>
              <h1 className="product-name">{product.name}</h1>
            </div>
            <ProductInfo />
            <div className="discount-section">
              <DiscountPrices
                price={product.price}
                discount={product.discount}
              />
              <DiscountBadge
                className="discount-badge"
                discount={product.discount}
              />
            </div>
            <hr className="text-[#E4E7E9]" />
            <ProductActions product={product} />
          </div>
        </div>
        <ProductDetails description={product.summary} />
      </div>
    </div>
  );
}
