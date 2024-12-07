import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <nav className="pt-8 pb-2 px-8 flex items-center justify-between border-b-[4px] border-black-primary">
      <Link to="/" className="flex items-center gap-3">
        <span className="text-title-primary font-HubotSans font-bold  text-black-main">Haus.</span>
      </Link>
      <div className="flex items-center gap-8">
        <NavItem to="/about" text="About Us" />
        <NavItem to="/blog" text="Blog" />
        <NavItem to="/faq" text="FAQ" />
        <NavItem to="/contact" text="Contact Us" />
      </div>
      <div className="flex items-center gap-6">
        <DropDown
          options={['Book', 'Cancel']}
          onClick={(value) => {
            console.log(value);
          }}
        />
        <button className="w-[150px] h-[75px] gap-2 flex items-center border-2 border-black-primary justify-center   text-black-primary text-nav">
          <span>Login</span>
        </button>{' '}
      </div>
    </nav>
  );
};

export default Navbar;
