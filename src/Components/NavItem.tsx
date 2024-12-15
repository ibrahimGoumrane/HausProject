interface NavItemProps {
  text: string;
  to: string;
}

const NavItem = ({ text, to }: NavItemProps) => {
  return (
    <a
      href={to}
      className="text-nav  text-black-main hover:text-black-secondary border-b-4 border-transparent hover:border-black-secondary font-light"
    >
      {text}
    </a>
  );
};

export default NavItem;
