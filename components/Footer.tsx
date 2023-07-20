import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div
        className={
          'flex h-[36px] sticky bottom-0 bg-white text-black [&>div]:items-center'
        }
      >
        <div className={'flex px-2'}>
          <Link href={'/about'}>About</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
