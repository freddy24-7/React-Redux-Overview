import { createSlice } from '@reduxjs/toolkit';

// Create a slice using the 'createSlice' function from '@reduxjs/toolkit'
const uiSlice = createSlice({
    // Name of the slice
    name: 'ui',
    // Initial state of the slice
    initialState: { cartIsVisible: false, notification: null },
    // Reducers for updating the slice state
    reducers: {
        // Toggle the cart visibility state
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        // Show a notification with the provided payload
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

// Extract the generated action creators from the slice
export const uiActions = uiSlice.actions;

// Export the uiSlice
export default uiSlice;