import {BsArrowRight} from 'react-icons/bs';
const Service = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card  bg-red-100 shadow-xl">
      <figure className="p-5">
        <img
          src={img}
          alt="service"
          className="rounded-xl h-52 w-full"
        />
      </figure>
      <div className="px-5 pb-5 text-left">
        <h2 className="card-title">{title}</h2>
        <div className=" flex mt-5 justify-between text-primary">
        <p className='text-xl font-semibold'>Price:${price}</p>
          <BsArrowRight className=' text-2xl'/>
        </div>
      </div>
    </div>
  );
};

export default Service;
