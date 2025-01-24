import { ProductCard } from '@/components/product/product-card';
import { getProducts } from '@/api/products';

export default async function Homepage() {
  const products = await getProducts();

  return (
    <div className="homepage-container">
      <h1 className="title">Más vistos</h1>
      <div className="grid">
        {products?.map((product, i) => (
          <ProductCard key={product?.id} {...product} i={i} />
        ))}
      </div>
    </div>
  );
}
