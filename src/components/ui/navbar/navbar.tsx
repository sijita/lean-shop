import '@/styles/navbar.scss';
import Link from 'next/link';
import { FaShop } from 'react-icons/fa6';
import CartCount from './cart-count';

export default function Navbar() {
  return (
    <div className="root">
      <header className="header">
        <nav className="navbar">
          <div className="brand">
            <FaShop size={28} />
            <Link href="/" className="brandName">
              LeanShop
            </Link>
          </div>
          <CartCount />
        </nav>
      </header>
    </div>
  );
}
