import { Link } from 'react-router-dom';
import NavItem from './NavItem';

export default function Navbar() {
  return (
    // <!-- ========== HEADER ========== -->
    <header className="sticky top-0 flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full border-b-2 border-black-primary bg-white-primary">
      <nav className="relative  w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-8 py-2 mx-auto">
        <div className="lg:col-span-3">
          {/* <!-- Logo --> */}
          <Link to="/" className="flex items-center gap-3">
            <span className="text-title-primary font-HubotSans font-bold text-black-main">Haus.</span>
          </Link>
          {/* <!-- End Logo --> */}
        </div>

        {/* <!-- Button Group --> */}
        <div className="flex items-center gap-x-2 lg:gap-x-4 ms-auto  lg:order-3 lg:col-span-3">
          {/* Drop Down */}
          <div className="hs-dropdown relative inline-flex">
            <button
              id="hs-dropdown-slideup-animation"
              type="button"
              className="hs-dropdown-toggle border-2 border-black-primary py-1 px-4 inline-flex items-center gap-x-2 text-nav font-medium bg-black-primary text-white-primary  disabled:pointer-events-none"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              Book
              <svg
                className="hs-dropdown-open:rotate-180 transition-none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 duration-300 mt-2 min-w-60 bg-white-primary"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-dropdown-slideup-animation"
            >
              <div className=" bg-white-primary border-2 border-black-primary">
                <Link
                  className="text-nav flex items-center  py-2 px-3 text-black-primary hover:bg-black-primary hover:text-white-primary"
                  to="/book?type=hive"
                >
                  A Hive
                </Link>
                <Link
                  className="text-nav flex items-center py-2 px-3  text-black-primary hover:bg-black-primary hover:text-white-primary"
                  to="/book?type=room"
                >
                  A Meeting Room
                </Link>
              </div>
            </div>
          </div>
          {/* End Drop Down */}
          <Link
            to="/login"
            className="py-1 px-4 gap-2 flex items-center border-2 border-black-primary justify-center text-black-primary hover:bg-black-primary hover:text-white-primary text-nav"
          >
            <span>Login</span>
          </Link>

          <div className="lg:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-10 flex justify-center items-center text-black-primary disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-hcail-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-hcail"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-hcail"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- End Button Group --> */}

        {/* <!-- Collapse --> */}
        <div
          id="hs-navbar-hcail"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
          aria-labelledby="hs-navbar-hcail-collapse"
        >
          <div className="flex flex-col gap-y-10 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
            <NavItem to="#about" text="About Us" />
            <NavItem to="#blog" text="Blog" />
            <NavItem to="#faq" text="FAQ" />
            <NavItem to="#contact" text="Contact Us" />
          </div>
        </div>
        {/* <!-- End Collapse --> */}
      </nav>
    </header>
    // <!-- ========== END HEADER ========== -->
  );
  //   <!-- ========== END HEADER ========== -->;
}
