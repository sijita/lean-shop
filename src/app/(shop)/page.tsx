import { ProductCard } from '@/components/product/product-card';
import { getProducts } from '@/api/products';

export default async function Homepage() {
  const products = await getProducts();

  return (
    <div className="w-full p-10 lg:p-20 min-h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-2xl font-semibold">Más vistos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product, i) => (
          <ProductCard key={product.id} {...product} i={i} />
        ))}
      </div>
    </div>
  );
}
