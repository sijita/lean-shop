import React from 'react';
import Navbar from '@/components/ui/navbar/navbar';
import Footer from '@/components/ui/footer/footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
