import { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";

const ProductDetails = () => {
	const selectedProduct = useMemo(
		() => ({
			name: "Stylish Jacket",
			originalPrice: 120,
			price: 100,
			description:
				"this is a random description sit back relax and enjoy the show",
			brand: "Gucci",
			material: "leather",
			sizes: ["S", "M", "L", "XL"],
			color: ["Red", "Green"],
			images: [
				{ url: "http://picsum.photos/500/500?random=1", altText: "Stylish Jacket" },
				{
					url: "http://picsum.photos/500/500?random=2",
					altText: "Stylish Jacket 2",
				},
			],
		}),
		[]
	);

	const [mainImage, setMainImage] = useState("");
	const [selectedSize, setSelectedSize] = useState("");
	const [selectedColor, setSelectedColor] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [buttonState, setButtonState] = useState("initial"); // "initial", "loading", "success"

	useEffect(() => {
		if (selectedProduct?.images?.length > 0) {
			setMainImage(selectedProduct.images[0].url);
		}
	}, [selectedProduct]);

	const handleQuantityChange = action => {
		if (action === "plus") setQuantity(prev => prev + 1);
		if (action === "minus" && quantity > 1) setQuantity(prev => prev - 1);
	};

	const handleAddToCart = () => {
		if (!selectedSize || !selectedColor) {
			toast.error("Please select a size and color before adding to cart.", {
				duration: 1000,
			});
			return;
		}

		// Set button to loading state
		setButtonState("loading");

		// Simulate API call
		setTimeout(() => {
			toast.success("Product added to cart", { duration: 1000 });
			// Set button to success state
			setButtonState("success");

			// Reset button state after 1 second
			setTimeout(() => {
				setButtonState("initial");
			}, 1000);
		}, 1000);
	};

	// Get the button text based on current state
	const getButtonText = () => {
		switch (buttonState) {
			case "loading":
				return "Adding...";
			case "success":
				return "Added to Cart!";
			default:
				return "Add to Cart";
		}
	};

	return (
		<section>
			<h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
			<div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
				<div className="flex flex-col md:flex-row">
					<div className="md:flex flex-col space-y-4 mr-6 hidden">
						{selectedProduct.images.map((image, index) => (
							<img
								key={index}
								src={image.url}
								alt={image.altText}
								className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-3 ${
									mainImage === image.url ? "border-red-300" : "border-white"
								}`}
								onClick={() => setMainImage(image.url)}
							/>
						))}
					</div>

					<div className="md:w-1/2 w-3/5">
						<div className="mb-4">
							<img
								src={mainImage}
								alt={
									selectedProduct.images.find(img => img.url === mainImage)?.altText ||
									"Stylish Jacket"
								}
								className="w-full h-auto object-cover rounded-lg"
							/>
						</div>
						<div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
							{selectedProduct.images.map((image, index) => (
								<img
									key={index}
									src={image.url}
									alt={image.altText}
									className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-3 ${
										mainImage === image.url ? "border-red-300" : "border-white"
									}`}
									onClick={() => setMainImage(image.url)}
								/>
							))}
						</div>
					</div>

					<div className="md:w-1/2 md:ml-10">
						<h1 className="text-2xl md:text-3xl font-semibold mb-2">
							{selectedProduct.name}
						</h1>
						<p className="text-lg text-gray-600 mb-1 line-through">
							{selectedProduct.originalPrice && `$${selectedProduct.originalPrice}`}
						</p>
						<p className="text-xl text-gray-500 mb-2">${selectedProduct.price}</p>
						<p className="text-gray-600 mb-4">{selectedProduct.description}</p>

						<div className="mb-4">
							<p className="text-gray-700">Color:</p>
							<div className="flex gap-2 mt-2">
								{selectedProduct.color.map(color => (
									<button
										onClick={() => setSelectedColor(color)}
										key={color}
										className={`w-8 h-8 rounded-full border ${
											selectedColor === color ? "border-2 border-black" : "border-gray-300"
										}`}
										style={{
											backgroundColor: color.toLowerCase(),
										}}></button>
								))}
							</div>
						</div>

						<div className="mb-4">
							<p className="text-gray-700">Size:</p>
							<div className="flex gap-2 mt-2">
								{selectedProduct.sizes.map(size => (
									<button
										onClick={() => setSelectedSize(size)}
										key={size}
										className={`px-4 py-2 rounded border ${
											selectedSize === size ? "bg-black text-white" : ""
										}`}>
										{size}
									</button>
								))}
							</div>
						</div>

						<div className="mb-6">
							<p className="text-gray-700">Quantity</p>
							<div className="flex items-center space-x-4 mt-2">
								<button
									onClick={() => handleQuantityChange("minus")}
									className="px-2 py-1 bg-gray-200 rounded text-lg">
									-
								</button>
								<span className="text-lg">{quantity}</span>
								<button
									onClick={() => handleQuantityChange("plus")}
									className="px-2 py-1 bg-gray-200 rounded text-lg">
									+
								</button>
							</div>
						</div>

						{/* Add to cart button with dynamic states */}
						<button
							onClick={handleAddToCart}
							disabled={!selectedSize || !selectedColor || buttonState !== "initial"}
							className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
								!selectedSize || !selectedColor || buttonState === "loading"
									? "cursor-not-allowed opacity-50"
									: buttonState === "success"
									? "bg-green-600 hover:bg-green-700"
									: "hover:bg-gray-900"
							}`}>
							{getButtonText()}
						</button>

						<div className="mt-10 text-gray-700">
							<h3 className="text-xl font-bold mb-4">Characteristics:</h3>
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
