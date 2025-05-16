
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContents = () => {
    const cartProducts = [
        {
            productId: 1,
            name: "T-Shirt",
            size: "M",
            color: "Black",
            quantity: 1,
            price: 15,
            image: "http://picusm.photos/200?random=1",
        },
        {
            productId: 2,
            name: "Jeans",
            size: "S",
            color: "Blue",
            quantity: 1,
            price: 45,
            image: "http://picusm.photos/200?random=2",
        },
        {
            productId: 3,
            name: "Hoodie",
            size: "L",
            color: "Gray",
            quantity: 2,
            price: 35,
            image: "http://picusm.photos/200?random=3",
        },
        {
            productId: 4,
            name: "Sneakers",
            size: "L",
            color: "White",
            quantity: 1,
            price: 65,
            image: "http://picusm.photos/200?random=4",
        },
        {
            productId: 5,
            name: "Cap",
            size: "XL",
            color: "Red",
            quantity: 1,
            price: 20,
            image: "http://picusm.photos/200?random=5",
        },
        {
            productId: 6,
            name: "Socks",
            size: "M",
            color: "Black",
            quantity: 3,
            price: 8,
            image: "http://picusm.photos/200?random=6",
        },
    ];
    return (
        <div>
            {cartProducts.map((product, index) => (
                <div
                    key={index}
                    className="flex items-start justify-between py-4 border-b border-gray-200"
                >
                    <div className="flex items-start">
                        <img
                            src={product.image}
                            alt="product image"
                            className="w-20 h24 object-cover mr-4 rounded"
                        />
                        <div>
                            <h3>{product.name}</h3>
                            <p className="text-sm text-gray-500">Size: {product.size} | color: {product.color}</p>
                            <div className="flex items-center mt-2">
                                <button className="border rounded px-2 py-1 text-xl font-medium ">-</button>
                                <span className="mx-4">{product.quantity}</span>
                                <button className="border rounded px-2 py-1 text-xl font-medium ">+</button>
                            </div>
                        </div>
                    </div>
                    {/* proudct price */}
                    <div>
                        <p>$ {product.price.toLocaleString()}</p>
                        <button>
                            <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600'/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartContents;
