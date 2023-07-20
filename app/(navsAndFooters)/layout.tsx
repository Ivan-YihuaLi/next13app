import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NavbarAndFooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
