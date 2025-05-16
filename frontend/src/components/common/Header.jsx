import Topbar from "../layout/Topbar";
import  Navbar from "./Navbar"

const Header = () => {
	return (
		<div className="border-b border-gray-200 shadow-lg">
			{/* Topbar */}
			<Topbar />
            {/* Navbar */}
            <Navbar />
            {/* Cart Drawer */}
		</div>

	);
};

export default Header;
