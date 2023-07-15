import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;

function App() {
    const dispatch = useDispatch();

    // Accessing state values from the Redux store
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        // Fetch cart data from the server when the component is mounted
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            // Skip the first execution of this effect (only run after the initial render)
            isInitial = false;
            return;
        }

        if (cart.changed) {
            // Send updated cart data to the server whenever the 'cart' state changes
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    return (
        <Fragment>
            {/* Conditional rendering of the 'Notification' component */}
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {/* Conditional rendering of the 'Cart' component */}
                {showCart && <Cart />}
                {/* Render the 'Products' component */}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;