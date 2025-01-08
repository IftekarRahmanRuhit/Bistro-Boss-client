import { NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaCalendarAlt, FaHome, FaPhone } from "react-icons/fa";
import { PiCrownDuotone } from "react-icons/pi";
import { TbBrandBooking } from "react-icons/tb";
import { LuSquareMenu } from "react-icons/lu";
import useCart from "../hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* DashBoard sidebar  */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {/* specific nav links  */}
                   <li> <NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink></li>
                   <li> <NavLink to="/dashboard/reservation"><FaCalendarAlt />Reservation</NavLink></li>
                   <li> <NavLink to="/dashboard/cart"><TiShoppingCart />My Cart ({cart.length})</NavLink></li>
                   <li> <NavLink to="/dashboard/review"><PiCrownDuotone />Add Review</NavLink></li>
                   <li> <NavLink to="/dashboard/bookings"><TbBrandBooking />My Booking</NavLink></li>

                    {/* Shared Nav links  */}
                   <div className="divider"></div>
                   <li> <NavLink to="/"><FaHome />Home</NavLink></li>
                   <li> <NavLink to="/order/salad"><LuSquareMenu />Menu</NavLink></li>
                   <li> <NavLink to="/order/contact"><FaPhone />Contact</NavLink></li>

                </ul>
            </div>

            {/* Dashboard content  */}
            <div className="flex-1 p-10">
              <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;