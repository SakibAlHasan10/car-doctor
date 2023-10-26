import ClientTestimonial from "./ClientTestimonial";

const Testimonial = () => {
  return (
    <div>
      <div className="text-center mt-32">
        <h3 className="text-primary text-xl mb-5 font-bold">Testimonial</h3>
        <h2 className="text-5xl font-bold">What Customer Says</h2>
        <p className="text-base mt-5 mb-12 font-normal md:w-[650px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>
      <ClientTestimonial/>
    </div>
  );
};

export default Testimonial;
