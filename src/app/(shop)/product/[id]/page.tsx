import Breadcrumb from '@/components/ui/breadcrumb';
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
    <div className="min-h-screen">
      <Breadcrumb alternativeText={product.name} />
      <div className="mx-auto max-w-7xl p-10 pb-0 flex flex-col gap-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white p-8 border border-[#E4E7E9]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <ProductStars rating={product.rating} />
                <span className="text-sm text-gray-500">
                  {product.reviews_number} Reviews
                </span>
              </div>
              <h1 className="text-xl font-normal text-gray-900">
                {product.name}
              </h1>
            </div>
            <ProductInfo />
            <div className="flex items-center gap-2">
              <DiscountPrices
                price={product.price}
                discount={product.discount}
              />
              <DiscountBadge discount={product.discount} />
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
