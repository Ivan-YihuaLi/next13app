import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CommonRoutesLayout({
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
