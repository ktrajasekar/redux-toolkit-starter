import type { Product } from '../types/cart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../store/cartSlice'

const Products: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems)

    // Sample products
    const PRODUCTS: Product[] = [
        { id: '1', name: 'T-Shirt', price: 15 },
        { id: '2', name: 'Coffee Mug', price: 8 },
        { id: '3', name: 'Notebook', price: 3 },
    ];


    return (
        <>
            {PRODUCTS.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>₹{product.price}</p>
                    <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                </div>
            ))}

            <code>
                {JSON.stringify(cartItems, null, 2)}
            </code>
        </>
    );
};

export default Products;