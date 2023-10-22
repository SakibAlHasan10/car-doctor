import Rating from "react-rating";
import PropTypes from "prop-types";
const Product = ({ product }) => {
  const { img, title, rating, price } = product;
  return (
    <div className="card  bg-base-100-100 shadow-xl">
      <figure className="p-5">
        <img src={img} alt="service" className="rounded-xl h-52 w-full" />
      </figure>
      <div className="px-5 pb-5 text-center">
        <div>
          <Rating initialRating={rating} readonly />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-xl font-semibold text-primary text-center">
          Price:${price}
        </p>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};
export default Product;
