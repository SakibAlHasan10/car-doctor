import slider1 from "../../../../src/assets/images/banner/1.jpg";
import slider2 from "../../../../src/assets/images/banner/2.jpg";
import slider3 from "../../../../src/assets/images/banner/3.jpg";
import slider4 from "../../../../src/assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="relative w-full">
          <img src={slider1} className="w-full h-[600px] rounded-lg" />
          <div className="absolute top-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[#15151500] w-full">
            <div className="w-[450px] ml-6 md:ml-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white md:leading-[70px]">
                Affordable Price For Car Servicing
              </h2>
              <p className="mt-5 text-lg font-normal text-[#fff]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="mt-5">
                <button className="btn bg-primary hover:bg-[#0000] hover:text-primary hover:border-primary text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex transform right-10 bottom-12 gap-8 ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="relative w-full">
          <img src={slider2} className="w-full h-[600px] rounded-lg" />
          <div className="absolute top-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[#15151500] w-full">
            <div className="w-[450px] ml-6 md:ml-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white md:leading-[70px]">
                Affordable Price For Car Servicing
              </h2>
              <p className="mt-5 text-lg font-normal text-[#fff]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="mt-5">
                <button className="btn bg-primary hover:bg-[#0000] hover:text-primary hover:border-primary text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute flex transform right-10 bottom-12 gap-8">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="relative w-full">
          <img src={slider3} className="w-full h-[600px] rounded-lg" />
          <div className="absolute top-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[#15151500] w-full">
            <div className="w-[450px] ml-6 md:ml-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white md:leading-[70px]">
                Affordable Price For Car Servicing
              </h2>
              <p className="mt-5 text-lg font-normal text-[#fff]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="mt-5">
                <button className="btn bg-primary hover:bg-[#0000] hover:text-primary hover:border-primary text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex transform right-10 bottom-12 gap-8">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="relative w-full">
          <img src={slider4} className="w-full h-[600px] rounded-lg" />
          <div className="absolute top-0 flex items-center h-full bg-gradient-to-r from-[#151515] to-[#15151500] w-full">
            <div className="w-[450px] ml-6 md:ml-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white md:leading-[70px]">
                Affordable Price For Car Servicing
              </h2>
              <p className="mt-5 text-lg font-normal text-[#fff]">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="mt-5">
                <button className="btn bg-primary hover:bg-[#0000] hover:text-primary hover:border-primary text-white mr-5">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex transform right-10 bottom-12 gap-8">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
