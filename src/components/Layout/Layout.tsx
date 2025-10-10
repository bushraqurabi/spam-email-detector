import { type ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
