import { Link } from 'react-router-dom';

interface NavItemProps {
  text: string;
  to: string;
}

const NavItem = ({ text, to }: NavItemProps) => {
  return (
    <Link
      to={to}
      className="text-nav  text-black-main hover:text-black-secondary border-b-4 border-transparent hover:border-black-secondary font-light"
    >
      {text}
    </Link>
  );
};

export default NavItem;
