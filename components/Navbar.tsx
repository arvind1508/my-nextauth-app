import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 p-4 flex items-center justify-between">
      <div className="text-white text-lg font-bold">
        <Link href="/">
          <span>Home</span>
        </Link>
      </div>
      <div>
        <Link href="/auth/login">
          <span className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Login
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
