import { createSlice } from '@reduxjs/toolkit';

// Create a slice using the 'createSlice' function from '@reduxjs/toolkit'
const cartSlice = createSlice({
    // Name of the slice
    name: 'cart',
    // Initial state of the slice
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    // Reducers for updating the slice state
    reducers: {
        // Replace the entire cart state with the payload
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        // Add an item to the cart or update an existing item
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        // Remove an item from the cart
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

// Extract the generated action creators from the slice
export const cartActions = cartSlice.actions;

// Export the cartSlice
export default cartSlice;