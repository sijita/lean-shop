import '@/styles/footer.scss';
import DownloadSection from './download-section';
import Section from './footer-section';
import TagsSection from './tags-section';
import { footerTags } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <Section
            title="CLICON"
            subtitle="Customer Support:"
            text1="(629) 555-0129"
            text2="4517 Washington Ave."
            text3="Manchester, Kentucky 39495"
            text4="info@kinbo.com"
          />
          <Section
            title="TOP CATEGORY"
            items={[
              'Computer & Laptop',
              'SmartPhone',
              'Headphone',
              'Accessories',
              'Camera & Photo',
              'TV & Homes',
            ]}
          />
          <Section
            title="QUICK LINKS"
            items={[
              'Shop Product',
              'Shopping Cart',
              'Wishlist',
              'Compare',
              'Track Order',
              'Customer Help',
              'About Us',
            ]}
          />
          <DownloadSection />
          <TagsSection tags={footerTags} />
        </div>
        <div className="brand">
          <p>Kinbo eCommerce Template © 2021. Design by Templatecookie</p>
        </div>
      </div>
    </footer>
  );
}
