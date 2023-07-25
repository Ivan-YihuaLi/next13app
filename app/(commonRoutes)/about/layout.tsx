export const metadata = {
  title: 'About',
  description: 'About page',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
