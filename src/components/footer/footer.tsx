import DownloadSection from './download-section';
import Section from './footer-section';
import TagsSection from './tags-section';

export default function Footer() {
  const tags = [
    'Game',
    'iPhone',
    'TV',
    'Asus Laptops',
    'MacBook',
    'SSD',
    'Graphics Card',
    'Power Bank',
    'Smart TV',
    'Speaker',
    'Tablet',
    'Microwave',
    'Samsung',
  ];

  return (
    <footer className="bg-[#1D1E1F] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
          <TagsSection tags={tags} />
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>Kinbo eCommerce Template © 2021. Design by Templatecookie</p>
        </div>
      </div>
    </footer>
  );
}
