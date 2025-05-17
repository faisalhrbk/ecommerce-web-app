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
					<div className="md:flex flex-col space-y-4 mr-6 hidden ">
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
					<div className="md:w-1/2 w-3/5">
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

					{/* right section */}
					<div className="md:w-1/2 md:ml-10">
						<h1 className="text-2xl md:text-3xl font-semibold mb-2">
							{selectedProduct.name}
						</h1>
						<p className="text-lg text-gray-600 mb-1 line-through">
							{selectedProduct.originalPrice &&
								`$${selectedProduct.originalPrice}`}
						</p>
						<p className="text-xl text-gray-500 mb-2">
							${selectedProduct.price}
						</p>
						<p className="text-gray-600 mb-4">{selectedProduct.description}</p>
						<div className="mb-4">
							<p className="text-gray-700">Color:</p>
							<div className="flex gap-2 mt-2">
								{selectedProduct.color.map((color) => (
									<button
										className="w-8 h-8 rounded-full border"
										key={color}
										style={{ backgroundColor: color.toLowerCase() }}
									></button>
								))}
							</div>
						</div>
						<div className="mb-4">
							<p className="text-gray-700">Size:</p>
							<div className="flex gap mt-2">
								{selectedProduct.sizes.map((size) => {
									<button key={size} className="px-4 py-2 rounded border">
										{size}
									</button>;
								})}
							</div>
						</div>
						<div className="mb-6">
							<p className="text-gray-700 ">Quantity</p>
							<div className="flex items-center space-x-4 mt-2">
								<button className="px-2 py-1 bg-gray-200 rounded text-lg">
									-
								</button>
								<span className="text-lg">2</span>
								<button className="px-2 py-1 bg-gray-200 rounded text-lg">
									+
								</button>
							</div>
						</div>
						<button className="bg-black text-white py-2 px-6 rounded w-full mb-4 ">
							Add to Cart
						</button>
						<div className="mt-10 text-gray-700">
							<h3 className="text-xl font-bold mb-4"> Characteristics:</h3>
							<table className="w-full text-left text-sm text-gray-600">
								<tbody>
									<tr>
										<td className="py-1">Brand</td>
										<td className="py-1">{selectedProduct.brand}</td>
									</tr>
									<tr>
										<td className="py-1">Material</td>
										<td className="py-1">{selectedProduct.material}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
