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
    <div className="rounded border border-gray-200">
      <ProductTabs />
      <div className="flex flex-col sm:flex-row justify-between p-10 gap-10">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Description</h3>
          <p className="text-[#5F6C72]">{description}</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Feature</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <PiMedal size={20} color="orange" className="flex-shrink-0" />
              <span>Free 1 Year Warranty</span>
            </li>
            <li className="flex items-center space-x-2">
              <PiTruck size={20} color="orange" className="flex-shrink-0" />
              <span>Free Shipping & Fastest Delivery</span>
            </li>
            <li className="flex items-center space-x-2">
              <PiHandshake size={20} color="orange" className="flex-shrink-0" />
              <span>100% Money-back guarantee</span>
            </li>
            <li className="flex items-center space-x-2">
              <PiHeadphones
                size={20}
                color="orange"
                className="flex-shrink-0"
              />
              <span>24/7 Customer support</span>
            </li>
            <li className="flex items-center space-x-2">
              <PiCreditCard
                size={20}
                color="orange"
                className="flex-shrink-0"
              />
              <span>Secure payment method</span>
            </li>
          </ul>
        </div>
        <div className="border-l border-gray-200 max-h-full"></div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Shipping Information</h3>
          <div className="space-y-3 text-sm text-gray-600">
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
