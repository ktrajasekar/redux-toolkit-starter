import { useSelector } from 'react-redux';
import { selectCartItems } from '../store/cartSlice'

const CartPage: React.FC = () => {
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems)
    const total = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );
    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-2xl font-bold mb-4 border-b pb-2">Shopping Cart</h1>

                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-3 text-left">Product</th>
                                <th className="p-3 text-center">Price</th>
                                <th className="p-3 text-center">Quantity</th>
                                <th className="p-3 text-center">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.product.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">{item.product.name}</td>
                                    <td className="p-3 text-center">${item.product.price}</td>
                                    <td className="p-3 text-center">{item.quantity}</td>
                                    <td className="p-3 text-center">
                                        ₹{item.product.price * item.quantity}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-end mt-4">
                        <div className="text-right">
                            <p className="text-lg font-semibold">
                                Total: <span className="text-blue-600">₹{total}</span>
                            </p>
                            <button className="mt-3 px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-white">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;