// Import necessary libraries and components
import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

// Define the CartItem component
const CartItem = (props) => {
    // Get the `dispatch` function from the `react-redux` library
    const dispatch = useDispatch();

    // Destructure the `item` object from the `props` object to get the cart item data
    const { title, quantity, total, price, id } = props.item;

    // Define a function to handle removing the item from the cart
    const removeItemHandler = () => {
        // Dispatch the `removeItemFromCart` action from the `cart-slice` slice, passing in the item ID
        dispatch(cartActions.removeItemFromCart(id));
    };

    // Define a function to handle adding the item to the cart
    const addItemHandler = () => {
        // Dispatch the `addItemToCart` action from the `cart-slice` slice, passing in the item data
        dispatch(
            cartActions.addItemToCart({
                id,
                title,
                price,
            })
        );
    };

    // Render the cart item using the cart item data
    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

// Export the CartItem component for use in other parts of the application
export default CartItem;