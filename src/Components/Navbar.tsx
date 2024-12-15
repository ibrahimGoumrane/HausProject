import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 pt-8 pb-2 px-8 flex items-center justify-between border-b-[2px] border-black-primary bg-white-primary">
      <Link to="/" className="flex items-center gap-3">
        <span className="text-title-primary font-HubotSans font-bold text-black-main">Haus.</span>
      </Link>
      <div className="flex items-center gap-8">
        <NavItem to="#about" text="About Us" />
        <NavItem to="#blog" text="Blog" />
        <NavItem to="#faq" text="FAQ" />
        <NavItem to="#contact" text="Contact Us" />
      </div>
      <div className="flex items-center gap-6">
        <DropDown
          options={['Book', 'Cancel']}
          onClick={(value) => {
            console.log(value);
          }}
        />
        <Link
          to="/login"
          className="w-[150px] h-[75px] gap-2 flex items-center border-2 border-black-primary justify-center text-black-primary text-nav"
        >
          <span>Login</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
