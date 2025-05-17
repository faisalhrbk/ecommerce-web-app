const ProductDetails = () => {
	const selectedProduct = {
		name: "Stylish Jacked",
		originalPrice: 120,
		price: 100,
		description:
			"this is a random description sit back relax and enjoy the show",
		brand: "Gucci",
		material: "leather",
		sizes: ["S", "M", "L", "XL"],
		color: ["Red", "Black"],
		images: [
			{
				url: "http://picsum.photos/500/500?random=1",
				altText: "Stylish Jacket",
			},
			{
				url: "http://picsum.photos/500/500?random=2",
				altText: "Stylish Jacket 2",
			},
		],
	};
	return (
		<section>
			<h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
			<div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
				<div className="flex flex-col md:flex-row">
					{/* Left Thumb */}
					<div className="flex flex-col space-y-4 mr-6">
						{selectedProduct.images.map((image, index) => (
							<img
								key={index}
								src={image.url}
								alt={image.altText}
								className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
							/>
						))}
					</div>

					{/* main image */}
					<div className="md:w-1/2">
						<div className="mb-4">
							<img
								src={selectedProduct.images[0]?.url}
								alt=""
								className="w-full h-auto object-cover rounded-lg"
							/>
						</div>
						{/* mobile thumbnails */}
						<div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
							{selectedProduct.images.map((image, index) => (
								<img
									key={index}
									src={image.url}
									alt={image.altText}
									className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
