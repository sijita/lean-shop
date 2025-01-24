import Breadcrumb from '@/components/ui/breadcrumb';
import ProductsResume from './components/products-resume';
import PriceResume from './components/price-resume';

export default function Page() {
  return (
    <div className="min-h-screen">
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row justify-center gap-5 max-w-6xl mx-auto p-10">
        <ProductsResume />
        <PriceResume />
      </div>
    </div>
  );
}
