import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

const firebaseURL = 'Insert firebase URL here';
const databaseURL = `${firebaseURL}/cart.json`;

// Action creator for fetching cart data
export const fetchCartData = () => {
    console.log(databaseURL);

    return async (dispatch) => {
        // Async function to fetch cart data from the server
        const fetchData = async () => {
            const response = await fetch(databaseURL);

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data;
        };

        try {
            // Fetch cart data and dispatch the 'replaceCart' action
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalQuantity: cartData.totalQuantity,
                })
            );
        } catch (error) {
            // Dispatch an error notification if fetching cart data fails
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!',
                })
            );
        }
    };
};

// Action creator for sending cart data to the server
export const sendCartData = (cart) => {
    return async (dispatch) => {
        // Dispatch a pending notification before sending the cart data
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        // Async function to send cart data to the server
        const sendRequest = async () => {
            const response = await fetch(databaseURL, {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };

        try {
            // Send cart data and dispatch a success notification
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
        } catch (error) {
            // Dispatch an error notification if sending cart data fails
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            );
        }
    };
};
