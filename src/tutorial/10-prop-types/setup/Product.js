import React from "react";
import defaultImagine from "../../../assets/default-image.jpeg";
import PropTypes from "prop-types";
const Product = ({ name, price, image }) => {
  return (
    <article className="product">
      <img src={image.url || image} alt={name}></img>
      <h4>{name}</h4>
      <p>{price}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "Default Name",
  price: 9.99,
  image: defaultImagine,
};

export default Product;
