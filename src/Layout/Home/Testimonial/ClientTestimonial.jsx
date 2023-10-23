import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../../src/assets/icons/quote.svg";
import "swiper/css";
import "swiper/css/navigation";
import Rating from "react-rating";

const ClientTestimonial = () => {
  return (
    <div className="mb-32">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        // pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="border-2 pl-10 py-10 rounded-xl">
            <div className="flex items-center gap-5">
              <img
                src="../../../../src/assets/images/team/1.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
              <div className="text-left">
                <h2 className="text-2xl font-bold">Awlad Hossain</h2>
                <h4 className="text-xl font-semibold">Businessman</h4>
              </div>
              <img src={img} alt="" className="w-16 h-16 ml-20" />
            </div>
            <p className="my-5 text-[#737373] mr-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <Rating initialRating={4.8} readonly />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 pl-10 py-10 rounded-xl">
            <div className="flex items-center gap-5">
              <img
                src="../../../../src/assets/images/team/2.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
              <div className="text-left">
                <h2 className="text-2xl font-bold">Awlad Hossain</h2>
                <h4 className="text-xl font-semibold">Businessman</h4>
              </div>
              <img src={img} alt="" className="w-16 h-16 ml-20" />
            </div>
            <p className="my-5 text-[#737373] mr-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <Rating initialRating={4.8} readonly />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 pl-10 py-10 rounded-xl">
            <div className="flex items-center gap-5">
              <img
                src="../../../../src/assets/images/team/3.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
              <div className="text-left">
                <h2 className="text-2xl font-bold">Awlad Hossain</h2>
                <h4 className="text-xl font-semibold">Businessman</h4>
              </div>
              <img src={img} alt="" className="w-16 h-16 ml-20" />
            </div>
            <p className="my-5 text-[#737373] mr-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <Rating initialRating={4.8} readonly />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 pl-10 py-10 rounded-xl">
            <div className="flex items-center gap-5">
              <img
                src="../../../../src/assets/images/team/1.jpg"
                alt=""
                className="rounded-full w-16 h-16"
              />
              <div className="text-left">
                <h2 className="text-2xl font-bold">Awlad Hossain</h2>
                <h4 className="text-xl font-semibold">Businessman</h4>
              </div>
              <img src={img} alt="" className="w-16 h-16 ml-20" />
            </div>
            <p className="my-5 text-[#737373] mr-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <Rating initialRating={4.8} readonly />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientTestimonial;
