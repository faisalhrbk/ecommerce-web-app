import { NavLink } from "react-router-dom";
import {
	HiOutlineUser,
	HiOutlineShoppingBag,
	HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar"
import CartDrawer from "../layout/CartDrawer";
const Navbar = () => {
	return (
		<>
			<nav className="container mx-auto flex items-center justify-between py-4 px-6">
				<div>
					<NavLink className="text-2xl font-medium" />
					Gucci
				</div>
				<div className=" hidden md:flex space-x-6">
					<NavLink className="text-gray-700 hover:text-black text-sm font-medium uppercase ">
						Men
					</NavLink>
					<NavLink className="text-gray-700 hover:text-black text-sm font-medium uppercase ">
						Women
					</NavLink>
					<NavLink className="text-gray-700 hover:text-black text-sm font-medium uppercase ">
						Top Wear
					</NavLink>
					<NavLink className="text-gray-700 hover:text-black text-sm font-medium uppercase ">
						Bottom Wear
					</NavLink>
				</div>
				{/* right - icons */}
				<div className="flex items-center space-x-4">
					<NavLink to="/profile" className="hover:text-black">
						<HiOutlineUser className="h-6 w-6 text-gray-700" />
					</NavLink>
					<button className="relative hover:text-black">
						<HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
						<span className="absolute bg-red-600 text-white text-sm rounded-full px-2 -top-1 ">
							6
						</span>
					</button>
					{/* search   */}
					<div className="overflow-hidden">
						<SearchBar />
					</div>

					{/* burger menu icon for small screen */}
					<button className="md:hidden">
						<HiBars3BottomRight className="h-6 w-6 text-gray-700" />
					</button>
				</div>
			</nav>
			<CartDrawer/>
		</>
	);
};
export default Navbar;
