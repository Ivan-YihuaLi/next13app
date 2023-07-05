import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <div className="bg-white">
        <nav className="flex mx-auto text-black">
          <div className="flex px-2">
            <Link href={'/'}>Home</Link>
          </div>
          <div className="flex px-2">
            <Link href={'/dashboard'}>
              <p className="text-black">Dashboard</p>
            </Link>
          </div>

          <div className="flex px-2 ml-auto">
            <Link href={'/auth/register'}>Register</Link>
          </div>
          <div className="flex px-2">
            <Link href={'/auth/login'}>Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
