import { getProduct } from './api/product';

type ProductDetailProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <div>
      <h1>ProductDetail - {id}</h1>
    </div>
  );
}
