import { Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
const OurTeam = () => {
  return (
    <div>
      <div className="text-center mt-32">
        <h3 className="text-primary text-xl mb-5 font-bold">Team</h3>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>
        <p className="text-base mt-5 mb-12 font-normal w-[650px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="border-2 p-5 rounded-xl">
            <img
              src="../../../../src/assets/images/team/1.jpg"
              alt=""
              className="rounded-xl"
            />
            <div className="text-center">
              <h2 className="text-2xl mt-5 font-bold">Car Engine Plug</h2>
              <h4 className="text-xl font-semibold">Engine Expert</h4>
              <div className="flex gap-2 mt-2 justify-center">
                <FaFacebookF className="w-8 h-8 bg-blue-700 text-white rounded-full p-2" />
                <FaTwitter className="w-8 h-8 bg-blue-400 text-white rounded-full p-2" />
                <FaLinkedinIn className="w-8 h-8 bg-blue-600 text-white rounded-full p-2" />
                <FaInstagram className="w-8 h-8 bg-red-600 text-white rounded-full p-2" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 p-5 rounded-xl">
            <img
              src="../../../../src/assets/images/team/2.jpg"
              alt=""
              className="rounded-xl"
            />
            <div className="text-center">
              <h2 className="text-2xl mt-5 font-bold">Car Engine Plug</h2>
              <h4 className="text-xl font-semibold">Engine Expert</h4>
              <div className="flex gap-2 mt-2 justify-center">
                <FaFacebookF className="w-8 h-8 bg-blue-700 text-white rounded-full p-2" />
                <FaTwitter className="w-8 h-8 bg-blue-400 text-white rounded-full p-2" />
                <FaLinkedinIn className="w-8 h-8 bg-blue-600 text-white rounded-full p-2" />
                <FaInstagram className="w-8 h-8 bg-red-600 text-white rounded-full p-2" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 p-5 rounded-xl">
            <img
              src="../../../../src/assets/images/team/3.jpg"
              alt=""
              className="rounded-xl"
            />
            <div className="text-center">
              <h2 className="text-2xl mt-5 font-bold">Car Engine Plug</h2>
              <h4 className="text-xl font-semibold">Engine Expert</h4>
              <div className="flex mt-2 gap-2 justify-center">
                <FaFacebookF className="w-8 h-8 bg-blue-700 text-white rounded-full p-2" />
                <FaTwitter className="w-8 h-8 bg-blue-400 text-white rounded-full p-2" />
                <FaLinkedinIn className="w-8 h-8 bg-blue-600 text-white rounded-full p-2" />
                <FaInstagram className="w-8 h-8 bg-red-600 text-white rounded-full p-2" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 p-5 rounded-xl">
            <img
              src="../../../../src/assets/images/team/1.jpg"
              alt=""
              className="rounded-xl"
            />
            <div className="text-center">
              <h2 className="text-2xl mt-5 font-bold">Car Engine Plug</h2>
              <h4 className="text-xl font-semibold">Engine Expert</h4>
              <div className="flex mt-2 gap-2 justify-center">
                <FaFacebookF className="w-8 h-8 bg-blue-700 text-white rounded-full p-2" />
                <FaTwitter className="w-8 h-8 bg-blue-400 text-white rounded-full p-2" />
                <FaLinkedinIn className="w-8 h-8 bg-blue-600 text-white rounded-full p-2" />
                <FaInstagram className="w-8 h-8 bg-red-600 text-white rounded-full p-2" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurTeam;
