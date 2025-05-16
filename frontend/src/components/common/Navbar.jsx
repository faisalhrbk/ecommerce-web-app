import { NavLink } from "react-router-dom";
export const Navbar = () => {
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
			</nav>
		</>
	);
};
