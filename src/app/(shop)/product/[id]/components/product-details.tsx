import ProductTabs from './product-tabs';
import {
  PiMedal,
  PiTruck,
  PiHandshake,
  PiHeadphones,
  PiCreditCard,
} from 'react-icons/pi';

export default function ProductDetails({
  description,
}: {
  description: string;
}) {
  return (
    <div className="details-container">
      <ProductTabs />
      <div className="row">
        <div className="column">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div className="column">
          <h3>Feature</h3>
          <ul>
            <li>
              <PiMedal size={20} color="orange" className="flex-shrink-0" />
              <span>Free 1 Year Warranty</span>
            </li>
            <li>
              <PiTruck size={20} color="orange" className="flex-shrink-0" />
              <span>Free Shipping & Fastest Delivery</span>
            </li>
            <li>
              <PiHandshake size={20} color="orange" className="flex-shrink-0" />
              <span>100% Money-back guarantee</span>
            </li>
            <li>
              <PiHeadphones
                size={20}
                color="orange"
                className="flex-shrink-0"
              />
              <span>24/7 Customer support</span>
            </li>
            <li>
              <PiCreditCard
                size={20}
                color="orange"
                className="flex-shrink-0"
              />
              <span>Secure payment method</span>
            </li>
          </ul>
        </div>
        <div className="vertical-divider"></div>
        <div className="shipping-container">
          <h3>Shipping Information</h3>
          <div className="list">
            <p>Courier: 2-4 days, Free Shipping</p>
            <p>Local Shipping: up to one week, $19.00</p>
            <p>UPS Ground Shipping: 3-6 days, $29.00</p>
            <p>Unishop Global Export: 3-4 days, $39.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
