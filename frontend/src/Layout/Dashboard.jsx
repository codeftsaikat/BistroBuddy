import { NavLink, Outlet } from "react-router-dom";
import {
  FaBookOpen,
  FaCalendar,
  FaCcPaypal,
  FaFileContract,
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaShopware,
  FaStar,
} from "react-icons/fa";
import useCarts from "../hooks/useCarts";
const Dashboard = () => {
    const [carts] = useCarts();
  return (
    <div className="flex">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-gradient-to-r from-slate-900 via-gray-800 to-blue-900 text-white">
        <ul className="menu">
          <li className="hover:bg-blue-500 rounded-md">
            <NavLink to="/dashboard/user-home">
              <FaHome size={32}></FaHome>
              <span>User Home</span>
            </NavLink>
          </li>
          <li className="hover:bg-blue-500 rounded-md">
            <NavLink to="/dashboard/reservation">
              <FaCalendar size={32}></FaCalendar>
              <span>Reservation</span>
            </NavLink>
          </li>
          <li className="hover:bg-blue-500 rounded-md">
            <NavLink to="/dashboard/payment">
              <FaCcPaypal size={32}></FaCcPaypal>
              <span>Payment History</span>
            </NavLink>
          </li>
          <li className="hover:bg-blue-500 rounded-md">
            <NavLink to="/dashboard/cart">
              <FaShoppingCart size={32}></FaShoppingCart>
              <span>My carts({carts.length})</span>
            </NavLink>
          </li>
          <li className="hover:bg-blue-500 rounded-md">
            <NavLink to="/dashboard/review">
              <FaStar size={32}></FaStar>
              <span>Add Review</span>
            </NavLink>
          </li>
          <li className="hover:bg-blue-500 rounded-md">
            <NavLink to="/dashboard/bookings">
              <FaBookOpen size={32}></FaBookOpen>
              <span>My Booking</span>
            </NavLink>
          </li>
          <hr className="mt-1 mb-1"/>
          <li className="hover:bg-blue-500 rounded-md">
            <NavLink to="/">
              <FaHome size={32}></FaHome>
              <span>Home</span>
            </NavLink>
          </li>
          <li className="hover:bg-blue-500 rounded-md">
            <NavLink to="/menu">
              <FaSearch size={32}></FaSearch>
              <span>Menu</span>
            </NavLink>
          </li>
          <li className="hover:bg-blue-500 rounded-md">
            <NavLink to="/">
              <FaShopware size={32}></FaShopware>
              <span>Shop</span>
            </NavLink>
          </li>
          <li className="hover:bg-blue-500 rounded-md">
            <NavLink to="/">
              <FaFileContract size={32}></FaFileContract>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 bg-gradient-to-r from-slate-900 via-gray-700">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
