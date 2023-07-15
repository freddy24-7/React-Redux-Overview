// Importing CSS classes from the "./Card.module.css" file
import classes from './Card.module.css';

// Defining the Card component
const Card = (props) => {
  return (
      <section
          // Applying CSS classes to the <section> element
          // This approach allows the component to apply both the predefined CSS classes
          // and any additional custom class provided, if applicable
          className={`${classes.card} ${props.className ? props.className : ''}`}
      >
        {/* Rendering the content of the Card component */}
        {props.children}
      </section>
  );
};

// Exporting the Card component as the default export of the module
export default Card;
