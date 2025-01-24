import './styles/cart.scss';
import Breadcrumb from '@/components/ui/breadcrumb/breadcrumb';
import ProductsResume from './components/products-resume';
import PriceResume from './components/price-resume';

export default function Page() {
  return (
    <div className="cart-container">
      <Breadcrumb />
      <div className="cart-row">
        <ProductsResume />
        <PriceResume />
      </div>
    </div>
  );
}
