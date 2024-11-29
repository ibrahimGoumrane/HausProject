import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white-main py-6 px-8 flex items-center justify-between border-b border-black-main/10">
      <Link to="/" className="flex items-center gap-3">
        <Building2 className="h-8 w-8 text-black-main" />
        <span className="text-nav font-HubotSans font-semibold text-black-main">Haus.</span>
      </Link>
      <div className="flex items-center gap-8">
        <Link to="/about" className="text-nav text-black-main hover:text-black-secondary">
          About Us
        </Link>
        <Link to="/blog" className="text-nav text-black-main hover:text-black-secondary">
          Blog
        </Link>
        <Link to="/faq" className="text-nav text-black-main hover:text-black-secondary">
          FAQ
        </Link>
        <Link to="/contact" className="text-nav text-black-main hover:text-black-secondary">
          Contact Us
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <select className="px-6 py-3 border-2 border-black-main rounded-md bg-white-secondary text-nav text-black-main">
          <option>Book</option>
        </select>
        <button className="px-6 py-3 text-nav text-black-main hover:text-black-secondary">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
