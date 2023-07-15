// Import necessary libraries and components
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

// Define the Cart component
const Cart = (props) => {
    // Get the cart items from the Redux store using the `useSelector` hook
    const cartItems = useSelector((state) => state.cart.items);

    // Render the cart with the cart items using the `CartItem` component
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={{
                            id: item.id,
                            title: item.name,
                            quantity: item.quantity,
                            total: item.totalPrice,
                            price: item.price,
                        }}
                    />
                ))}
            </ul>
        </Card>
    );
};

// Export the Cart component for use in other parts of the application
export default Cart;