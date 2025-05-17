import Hero from "../components/layout/Hero";
import GenderCollection from "../components/products/GenderCollection";
import NewArrivals from "../components/products/NewArrivals";
import ProductDetails from "../components/products/ProductDetails";

const Home = () => {
	return (
		<div>
			<Hero />

			{/* gender collection for home page */}
			<GenderCollection />

			{/* new arrival for home page */}
			<NewArrivals />

			{/* best seller */}

            <ProductDetails/>
		</div>
	);
};

export default Home;
