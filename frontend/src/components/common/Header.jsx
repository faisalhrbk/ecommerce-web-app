import Topbar from "../layout/Topbar";
import  Navbar from "./Navbar"

const Header = () => {
	return (
		<div>
			{/* Topbar */}
			<Topbar />
            {/* Navbar */}
            <Navbar />
            {/* Cart Drawer */}
		</div>
	);
};

export default Header;
