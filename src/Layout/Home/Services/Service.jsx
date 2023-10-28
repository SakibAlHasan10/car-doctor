import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
const Service = ({ service }) => {
  console.log(service)
  const {_id, img, title, price } = service;
  return (
    <div className="card  bg-base-100-100 shadow-xl">
      <figure className="p-5">
        <img src={img} alt="service" className="rounded-xl h-52 w-full" />
      </figure>
      <div className="px-5 pb-5 text-left">
        <h2 className="card-title">{title}</h2>
        <div className=" flex mt-5 justify-between text-primary">
          <p className="text-xl font-semibold">Price:${price}</p>
          <Link to={`/services/${_id}`}>
            <BsArrowRight className=" text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};
Service.propTypes ={
    service: PropTypes.object
}
export default Service;
