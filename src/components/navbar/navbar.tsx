import Link from 'next/link';
import { FaShop } from 'react-icons/fa6';
import styles from './Navbar.module.scss';
import CartCount from './cart-count';

export default function Navbar() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.brand}>
            <FaShop size={28} />
            <Link href="/" className={styles.brandName}>
              LeanShop
            </Link>
          </div>
          <CartCount />
        </nav>
      </header>
    </div>
  );
}
