import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

// Configure the Redux store using the 'configureStore' function from '@reduxjs/toolkit'
const store = configureStore({
    // Define the reducers for the store
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

// Export the configured store
export default store;