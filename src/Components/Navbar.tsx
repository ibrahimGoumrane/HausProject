import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 flex items-center justify-between border-b">
      <Link to="/" className="flex items-center gap-2">
        <Building2 className="h-6 w-6" />
        <span className="text-xl font-semibold">Haus.</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-gray-600">
          About Us
        </Link>
        <Link to="/" className="hover:text-gray-600">
          Blog
        </Link>
        <Link to="/" className="hover:text-gray-600">
          FAQ
        </Link>
        <Link to="/" className="hover:text-gray-600">
          Contact Us
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <select className="px-4 py-2 border rounded-md bg-gray-50">
          <option>Book</option>
        </select>
        <button className="px-4 py-2 text-gray-600 hover:text-gray-800">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
