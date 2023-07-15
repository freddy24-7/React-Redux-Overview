// Import necessary libraries and components
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

// Define the ProductItem component
const ProductItem = (props) => {
    // Get the `dispatch` function from the `react-redux` library
    const dispatch = useDispatch();

    // Destructure the `props` object to get the product data
    const { title, price, description, id } = props;

    // Define a function to handle adding the product to the cart
    const addToCartHandler = () => {
        // Dispatch the `addItemToCart` action from the `cart-slice` slice, passing in the product data
        dispatch(
            cartActions.addItemToCart({
                id,
                title,
                price,
            })
        );
    };

    // Render the product item using the product data
    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

// Export the ProductItem component for use in other parts of the application
export default ProductItem;