import PropTypes from "prop-types"
const ShortBanner = ({children}) => {
  return (
    <div>
      <div className="relative">
        <img src="../../../src/assets/images/checkout/checkout.png" alt="" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151500] rounded-xl top-0 pt-28 text-white  text-5xl font-bold  w-full">
          <h2 className="ml-24">Service Details</h2>
          <div className="relative flex justify-center mt-[84px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="296"
              height="50"
              viewBox="0 0 296 50"
              fill="none"
            >
              <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
            </svg>
            <h4 className={"text-xl font-medium absolute mt-2"}>
              {"Home/"+children}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
ShortBanner.propTypes={
    children: PropTypes.string
}
export default ShortBanner;
