// Import necessary libraries and components
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

// Define the CartButton component
const CartButton = (props) => {
    // Get the `dispatch` function from the `react-redux` library
    const dispatch = useDispatch();

    // Get the cart quantity from the Redux store using the `useSelector` hook
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    // Define a function to handle toggling the cart visibility
    const toggleCartHandler = () => {
        // Dispatch the `toggle` action from the `ui-slice` slice to toggle the cart visibility
        dispatch(uiActions.toggle());
    };

    // Render the cart button with the cart quantity and a badge
    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

// Export the CartButton component for use in other parts of the application
export default CartButton;