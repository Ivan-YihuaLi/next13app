import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className={'sticky bottom-0 bg-white text-black'}>
        <div className={'px-2'}>
          <Link href={'/'}>Footer Item</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
