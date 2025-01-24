'use client';
import AddToCartButton from './add-to-cart-button';
import type { Product } from '@/types/product';
import useAddToCart from '@/hooks/use-add-to-cart';

export default function FirstProductDetails({
  i,
  product,
}: {
  i: number;
  product: Product;
}) {
  const { handleAddToCart } = useAddToCart();

  return (
    <>
      {i === 0 && (
        <>
          <p className="text-sm text-[#5F6C72] truncate">{product.summary}</p>
          <div className="flex flex-col gap-2">
            <AddToCartButton
              className="w-auto flex items-center justify-center gap-2 bg-[#FA8232] px-4 py-2 rounded font-semibold"
              onClick={() => handleAddToCart(product)}
            />
          </div>
        </>
      )}
    </>
  );
}
