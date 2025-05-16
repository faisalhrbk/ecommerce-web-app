import { NavLink } from "react-router-dom";
import {
	HiOutlineUser,
	HiOutlineShoppingBag,
	HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../layout/CartDrawer";
import { useState } from "react";

const Navbar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [navDrawerOpen, setNavDrawerOpen] = useState(false);

	const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
	const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

	return (
		<>
			<nav className="container mx-auto flex items-center justify-between py-4 px-6">
				<div>
					<NavLink className="text-2xl font-medium" to="/">
						Gucci
					</NavLink>
				</div>
				<div className="hidden md:flex space-x-6">
					<NavLink
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
						to="/men"
					>
						Men
					</NavLink>
					<NavLink
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
						to="/women"
					>
						Women
					</NavLink>
					<NavLink
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
						to="/top-wear"
					>
						Top Wear
					</NavLink>
					<NavLink
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
						to="/bottom-wear"
					>
						Bottom Wear
					</NavLink>
				</div>
				<div className="flex items-center space-x-4">
					<NavLink to="/profile" className="hover:text-black">
						<HiOutlineUser className="h-6 w-6 text-gray-700" />
					</NavLink>
					<button
						onClick={toggleCartDrawer}
						className="relative hover:text-black"
					>
						<HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
						<span className="absolute bg-red-600 text-white text-sm rounded-full px-2 -top-1">
							6
						</span>
					</button>
					<div className="overflow-hidden">
						<SearchBar />
					</div>
					<button onClick={toggleNavDrawer} className="md:hidden">
						<HiBars3BottomRight className="h-6 w-6 text-gray-700" />
					</button>
				</div>
			</nav>
			<CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
			<div
				className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transition-transform duration-300 z-50 ${
					navDrawerOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="flex justify-end p-4">
					<button onClick={() => setNavDrawerOpen(false)}>
						<IoMdClose className="h-6 w-6 text-gray-600" />
					</button>
				</div>
				<div className="flex flex-col space-y-4 p-6">
					<NavLink
						to="/men"
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
						onClick={() => setNavDrawerOpen(false)}
					>
						Men
					</NavLink>
					<NavLink
						to="/women"
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
						onClick={() => setNavDrawerOpen(false)}
					>
						Women
					</NavLink>
					<NavLink
						to="/top-wear"
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
						onClick={() => setNavDrawerOpen(false)}
					>
						Top Wear
					</NavLink>
					<NavLink
						to="/bottom-wear"
						className="text-gray-700 hover:text-black text-sm font-medium uppercase"
						onClick={() => setNavDrawerOpen(false)}
					>
						Bottom Wear
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Navbar;
