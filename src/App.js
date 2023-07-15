// Import necessary libraries and components
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

// Define the main App component
function App() {
    // Use the `useSelector` hook to retrieve the `cartIsVisible` property from the Redux store
    const showCart = useSelector((state) => state.ui.cartIsVisible);

    // Render the Layout component, which wraps the Cart and Products components
    // The Cart component is only rendered if `showCart` is true (i.e., the user has clicked on the cart icon)
    return (
        <Layout>
            {showCart && <Cart />}
            <Products />
        </Layout>
    );
}

// Export the App component for use in other parts of the application
export default App;