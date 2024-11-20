import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { BsCart4 } from "react-icons/bs";
import useCarts from "../../../hooks/useCarts";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCarts([]);

  const handleLogout = () => {
    logOut();
  };
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn bg-transparent border-none text-white hover:bg-transparent">
          <BsCart4 className="relative" size={24}/>
            <div className="badge badge-secondary absolute top-1 -right-1 text-white">+{cart.length}</div>
          </button>
        </Link>
      </li>

      <li>
        {user ? (
          <div className="flex gap-8">
            <Link
              className="bg-transparent border border-white border-1 rounded-full px-4 py-2 font-mono font-normal hover:bg-blue-600 relative"
              onClick={handleLogout}
            >
              Logout
            </Link>
            <span className="bg-orange-600 px-1 py-2 rounded-md font-thin absolute -bottom-12 mt-2 ">
              {user.displayName}
            </span>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-base-100 px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl bg-gradient-to-r from-gray-200 to-blue-400 bg-clip-text text-transparent font-bold">
            BistroBuddy
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white text-lg font-semibold">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end mr-4">
          <a className="btn btn-outline btn-warning">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
