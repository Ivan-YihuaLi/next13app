import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex sticky h-[36px] bg-white m-auto text-black [&>div]:items-center">
      <div className="flex px-2">
        <Link href={'/'}>Home</Link>
      </div>
      <div className="flex px-2">
        <Link href={'/dashboard'}>Dashboard</Link>
      </div>

      <div className="flex px-2 ml-auto">
        <Link href={'/register'}>Register</Link>
      </div>
      <div className="flex px-2">
        <Link href={'/login'}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
