import Breadcrumb from '@/components/ui/breadcrumb';
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
    <div className="min-h-screen">
      <Breadcrumb alternativeText={product?.name} />
    </div>
  );
}
