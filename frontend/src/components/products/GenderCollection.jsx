import { Link } from "react-router-dom";
import mensCollectionImg from "../../assets/mens-collection.webp";

const GenderCollection = () => {
    return (
        <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <h1 className="text-center mb-8 text-2xl md:text-4xl font-bold">
                Our Collections
            </h1>
            <div className="flex flex-col md:flex-row gap-6">
                {/* women collection */}
                <div className="relative flex-1 mb-4 md:mb-0">
                    <img
                        src={mensCollectionImg}
                        alt="women collection img"
                        className="w-full h-[250px] md:h-[400px] rounded object-cover px-4"
                    />
                    <div className="absolute bottom-4 left-8 bg-white/90 p-3 rounded shadow-sm">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            Women's Collection
                        </h2>
                        <Link
                            to="/collection/all?gender=Women"
                            className="text-gray-800 hover:font-bold underline"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                {/* mens collection */}
                <div className="relative flex-1">
                    <img
                        src={mensCollectionImg}
                        alt="men collection img"
                        className="w-full h-[250px] md:h-[400px] rounded object-cover px-4"
                    />
                    <div className="absolute bottom-4 left-8 bg-white/90 p-3 rounded shadow-sm">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            Men's Collection
                        </h2>
                        <Link
                            to="/collection/all?gender=Men"
                            className="text-gray-800 hover:font-bold underline"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GenderCollection;
