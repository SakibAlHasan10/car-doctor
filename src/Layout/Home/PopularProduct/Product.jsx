import Rating from "react-rating";
import PropTypes from "prop-types";
const Product = ({ product }) => {
  const { img, title, rating, price } = product;
  return (
    <div className="card p-5 bg-base-100-100 shadow-xl">
      <figure className="m-5 py-8 rounded-xl bg-base-200">
        <img src={img} alt="service" className="rounded-xl h-36  w-48" />
      </figure>
      <div className=" mt-2 text-center">
        <div>
          <Rating initialRating={rating} readonly />
        </div>
        <h2 className="text-2xl mt-2 font-bold">{title}</h2>
        <p className="text-xl mt-2 font-semibold text-primary text-center">
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
