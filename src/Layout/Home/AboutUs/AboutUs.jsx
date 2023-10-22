import person from "../../../../src/assets/images/about_us/person.jpg";
import parts from "../../../../src/assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <div className="mt-16 ">
      <div className="hero">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <div className="flex-1 relative">
            <div className="mr-20 mt-0 h-auto">
              <img
                src={person}
                className="w-full rounded-lg top-0 shadow-2xl h-[400px] "
              />
            </div>
            <div className="absolute -bottom-14 h-2/3 right-0 w-1/2">
              <img
                src={parts}
                className="w-full rounded-lg h-full "
              />
            </div>
          </div>
          <div className="flex-1 mt-10 ">
            <h3 className="text-[#FF3811] text-xl font-bold mb-5">About Us</h3>
            <h2 className="text-4xl font-bold w-1/2 mb-7">
              We are qualified & of experience in this field
            </h2>
            <p className="mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.{" "}
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don&apos;t look even slightly
              believable.{" "}
            </p>
            <button className="btn bg-primary text-white hover:text-primary hover:bg-[#fff0] hover:border-primary mt-5">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
