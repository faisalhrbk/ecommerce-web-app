import { IoMdClose } from "react-icons/io";
import CartContents from "../cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
	return (
		<div
			className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-2/4 lg:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
				drawerOpen ? "translate-x-0" : "translate-x-full"
			}`}
		>
			{/* close button */}
			<div className="flex justify-end p-4 cursor-pointer">
				<button onClick={toggleCartDrawer}>
					<IoMdClose className="h-6 w-6 text-gray-600 cursor-pointer" />
				</button>
			</div>
			<h2 className="px-4 text-xl font-semibold mb-4">Your cart</h2>
			{/* cart content scrollable area */}
			<div className="flex-grow p-4 overflow-y-auto ">
				<CartContents />
			</div>
			{/* checkout button fixed at bottom */}
			<div className="p-4 bg-white sticky bottom-0">
				<button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transform cursor-pointer">
					Checkout
				</button>
				<p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
					Shipping , taxes and discount codes calculated at checkout
				</p>
			</div>
		</div>
	);
};

export default CartDrawer;
