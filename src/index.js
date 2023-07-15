// Import necessary libraries and components
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';
import './index.css';
import App from './App';

// Create a new root React DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in a Provider component that provides access to the Redux store
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);