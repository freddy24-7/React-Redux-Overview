# React Redux Shopping Cart - Redux Toolkit overview - ASYNC

This section deals with async functions in the redux setup. To get started, please first obtain a firebase URL to run a firebase backend:

Visit the Firebase website: Go to the Firebase website at https://firebase.google.com/ and sign in to your Google account. If you don't have an account, you'll need to create one.

Create a new Firebase project: Once you're signed in, click on "Get started" and then click "Add project." Provide a name for your project and choose a region for your database.

Enable the Realtime Database service: In your Firebase project dashboard, click on "Develop" in the left sidebar, and then choose "Database" under the "Build" section.

Set up the Realtime Database: On the Database page, you'll see options to choose between "Firestore" and "Realtime Database." Select "Realtime Database" to continue.

Choose test mode: Firebase offers two modes for accessing the Realtime Database: "Locked mode" and "Test mode." For test mode, click on the "Rules" tab in the Database section and then click on the toggle switch to enable test mode.

Get the Firebase URL: In the Database section, you'll find a URL listed at the top of the page. It should look something like: https://your-project-name.firebaseio.com/. This URL is your Firebase URL.

# React Redux Shopping Cart - Redux Toolkit overview

Insert your firebase URL in the file src/store/cart-actions.js

# React Redux Shopping Cart - Redux Toolkit overview

This is code from the course "React - The Complete Guide (incl Hooks, React Router, Redux)" by Maximilian Schwarzmüller on Udemy.

The main file gives an overview of Redux Toolkit in a practical way, using inbuilt dummy data. This implies that there is no use of async functions in the redux setup.
The file 02-async-firebase gives an overview of async redux functions, using a firebase backend. 
The solution presented here is a solution which minimises the use of redux code in the components. The components are kept as simple as possible, and the redux code is kept in the store folder.
Moreover, all the async code is kept in the store folder, in the file cart-actions.js. This is done by using the redux-thunk middleware. This middleware allows us to return a function in the action creator, instead of an action object. This function can then contain async code, and dispatch actions when the async code is done. This is a very clean solution, as the components do not need to know anything about the async code. They just dispatch an action, and the async code is handled in the store folder.

To run this application locally, you'll need to have Node.js and npm (Node Package Manager) installed on your machine. Follow the steps below to get started:

npm install

npm start

# Application Overview

This application is a simple e-commerce shopping cart built using React and Redux. It allows users to browse products, add them to the cart, and view the items in the cart. The core technologies used in this application are:

- React: A JavaScript library for building user interfaces. It is used to create reusable UI components and manage the application's component tree.

- Redux: A predictable state container for JavaScript applications. It is used for managing the global state of the application, including the cart items and UI state.

- React Redux: A library that provides React bindings for Redux. It allows React components to interact with the Redux store and access the state and dispatch actions.

- Redux Toolkit: A package that simplifies the usage of Redux by providing utilities to define reducers, actions, and the Redux store configuration.

# Code Explanation

## index.js

This file is the entry point of the application. It sets up the Redux store and renders the root component (`App`) wrapped in the `Provider` component, which provides access to the Redux store.

## App.js

This file defines the main `App` component, which represents the overall structure of the application. It uses the `useSelector` hook to retrieve the `cartIsVisible` property from the Redux store. The `Layout` component is rendered, which wraps the `Cart` and `Products` components. The `Cart` component is only rendered if `showCart` (derived from the `cartIsVisible` property) is true.

## store/index.js

This file defines the Redux store using the `configureStore` function from Redux Toolkit. It combines the reducers from `uiSlice` and `cartSlice` to form the root reducer for the store.

## ui-slice.js

This file defines a Redux slice called `ui` using the `createSlice` function from Redux Toolkit. The `ui` slice manages the UI state of the application, specifically the visibility of the cart. It provides a single reducer called `toggle` that toggles the `cartIsVisible` property in the slice's state.

## cart-slice.js

This file defines a Redux slice called `cart` using the `createSlice` function from Redux Toolkit. The `cart` slice manages the state related to the shopping cart, including the items in the cart and the total quantity. It provides reducers for adding and removing items from the cart.

## cart-actions

This component contains action creators for fetching and sending cart data to a Firebase Realtime Database.

## ProductItem.js

This file defines the `ProductItem` component, which represents a single product item in the product list. It uses the `useDispatch` hook to get the `dispatch` function and dispatches actions from the `cart-slice` to add items to the cart.

## Products.js

This file defines the `Products` component, which represents the product list. It renders a list of products using dummy product data. Each product item is rendered using the `ProductItem` component.

## CartButton.js

This file defines the `CartButton` component, which represents the cart button displayed in the header. It uses the `useSelector` and `useDispatch` hooks to get the cart quantity from the Redux store and dispatch the `toggle` action from the `ui-slice` to toggle the cart visibility.

## Cart.js

This file defines the `Cart` component, which represents the shopping cart. It uses the `useSelector` hook to get the cart items from the Redux store. It renders the cart items using the `CartItem` component.

## CartItem.js

This file defines the `CartItem` component, which represents a single item in the shopping cart. It uses the `useDispatch` hook to get the `dispatch` function and dispatches actions from the `cart-slice` to remove or add items to the cart.

## Layout.js

This file defines the `Layout` component, which represents the overall layout of the application. It renders the `MainHeader` component and wraps the main content (`props.children`) inside a `main` element.

## MainHeader.js

This file defines the `MainHeader` component, which represents the main header of the application. It displays the application title and includes the `CartButton` component.

## Card.js

This file defines the `Card` component, which is a wrapper component that applies CSS classes to its content. It allows the component to apply both predefined CSS classes and any additional custom class provided.

