import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NewArrivals = () => {
	const products = [
		{
			_id: "1",
			name: "Stylish Jacket",
			price: 220,
			images: [
				{
					url: "https://picsum.photos/500/500?random=1",
					altText: "Stylish Jacket",
				},
			],
		},
		{
			_id: "2",
			name: "Casual T-Shirt",
			price: 45,
			images: [
				{
					url: "https://picsum.photos/500/500?random=2",
					altText: "Casual T-Shirt",
				},
			],
		},
		{
			_id: "3",
			name: "Denim Jeans",
			price: 120,
			images: [
				{
					url: "https://picsum.photos/500/500?random=3",
					altText: "Denim Jeans",
				},
			],
		},
		{
			_id: "4",
			name: "Running Shoes",
			price: 95,
			images: [
				{
					url: "https://picsum.photos/500/500?random=4",
					altText: "Running Shoes",
				},
			],
		},
		{
			_id: "5",
			name: "Leather Watch",
			price: 180,
			images: [
				{
					url: "https://picsum.photos/500/500?random=5",
					altText: "Leather Watch",
				},
			],
		},
		{
			_id: "6",
			name: "Winter Sweater",
			price: 75,
			images: [
				{
					url: "https://picsum.photos/500/500?random=6",
					altText: "Winter Sweater",
				},
			],
		},
		{
			_id: "7",
			name: "Designer Sunglasses",
			price: 135,
			images: [
				{
					url: "https://picsum.photos/500/500?random=7",
					altText: "Designer Sunglasses",
				},
			],
		},
		{
			_id: "8",
			name: "Backpack",
			price: 65,
			images: [
				{ url: "https://picsum.photos/500/500?random=8", altText: "Backpack" },
			],
		},
		{
			_id: "9",
			name: "Wireless Headphones",
			price: 150,
			images: [
				{
					url: "https://picsum.photos/500/500?random=9",
					altText: "Wireless Headphones",
				},
			],
		},
		{
			_id: "10",
			name: "Smart Fitness Band",
			price: 85,
			images: [
				{
					url: "https://picsum.photos/500/500?random=10",
					altText: "Smart Fitness Band",
				},
			],
		},
	];
	const scrollRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(false);
	const [scrollRight, seScrollRight] = useState(true);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);
	// update scroll buttons
	const scroll = (direction) => {
		const scrollAmount = direction === "left" ? -300 : 300;
		scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
	};
	const updateScrollButtons = () => {
		const container = scrollRef.current;
		// only to understand
		// console.log({
		// 	scrollLeft: container.scrollLeft,
		// 	clientWidth: container.clientWidth,
		// 	containerScrollWidth: container.scrollWidth,
		// });
		if (container) {
			const leftScroll = container.scrollLeft;
			setCanScrollLeft(leftScroll > 0);
			const rightScrollable =
				container.scrollWidth > leftScroll + container.clientWidth;
			setCanScrollLeft(leftScroll > 0);
			setCanScrollRight(rightScrollable);
		}
	};

    const handleMouseDown = e => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft)
    }

	useEffect(() => {
		const container = scrollRef.current;
		if (container) {
			container.addEventListener("scroll", updateScrollButtons);
		}
	});

	return (
		<section>
			<div className="container mx-auto text-center mb-10 relative">
				<h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
				<p className="text-lg text-gray-600 mb-8">
					Discover the latest styles straight off the runway, freshly added to
					keep your wardrobe on the cutting edge of fashion
				</p>
				{/* scroll buttons */}
				<div className="absolute right-0 bottom-[-30px] flex space-x-2">
					<button
						onClick={() => scroll("left")}
						disabled={!canScrollLeft}
						className={`p-2 rounded border  ${
							canScrollLeft
								? " bg-white text-black cursor-pointer"
								: "bg-gray-200 text-gray-400 cursor-not-allowed"
						}`}
					>
						<FiChevronLeft className="text-2xl" />
					</button>
					<button
						onClick={() => scroll("right")}
						className={`p-2 rounded border  ${
							canScrollRight
								? " bg-white text-black cursor-pointer  "
								: "bg-gray-200 text-gray-400 cursor-not-allowed"
						}`}
					>
						<FiChevronRight className="text-2xl" />
					</button>
				</div>
			</div>
			{/* scrollable content */}
			<div
				ref={scrollRef}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={hadleMouseUpOrLeave}
				onMouseLeave={hadleMouseUpOrLeave}
				className="container mx-auto overflow-x-scroll flex space-x-6 relative pb-4"
			>
				{products.map((product, index) => (
					<div
						key={index}
						className="relative min-w-[100%] sm:min-w-[50%] lg:min-w-[30%]   "
					>
						<img
							className="w-full h-[500px] object-cover rounded-lg"
							src={product.images[0]?.url}
							alt={product.images[0]?.altText}
						/>
						<div className="absolute bottom-0 left-0 right-0 bg-black/10 backdrop-blur-md text-white p-4 rounded-b-lg">
							<h4 className="font-medium">{product.name}</h4>
							<p className="mt-1">${product.price}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default NewArrivals;
