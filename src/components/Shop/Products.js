// Import necessary libraries and components
import ProductItem from './ProductItem';
import classes from './Products.module.css';

// Define some dummy product data
const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        title: 'My First Book',
        description: 'The first book I ever wrote',
    },
    {
        id: 'p2',
        price: 5,
        title: 'My Second Book',
        description: 'The second book I ever wrote',
    },
];

// Define the Products component
const Products = (props) => {
    // Render the product list using the dummy product data
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

// Export the Products component for use in other parts of the application
export default Products;