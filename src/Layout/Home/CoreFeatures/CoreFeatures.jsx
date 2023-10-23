import img1 from "../../../../src/assets/icons/group.svg";
import img2 from "../../../../src/assets/icons/deliveryt.svg";
import img3 from "../../../../src/assets/icons/person.svg";
import img4 from "../../../../src/assets/icons/Wrench.svg";
import img5 from "../../../../src/assets/icons/check.svg";
import img6 from "../../../../src/assets/icons/deliveryt.svg";
const CoreFeatures = () => {
  return (
    <div className="text-center mt-32">
      <h3 className="text-primary text-xl mb-5 font-bold">Core Features</h3>
      <h2 className="text-5xl font-bold">Why Choose Us</h2>
      <p className="text-base mt-5 mb-12 font-normal w-[650px] mx-auto">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don&apos;t look even slightly believable.{" "}
      </p>
      <div className="flex justify-between">
        <div className="border p-6 rounded-lg hover:bg-primary hover:text-white">
          <img src={img1} alt="" className="mx-auto mb-2 " />
          <h3 className="text-lg font-bold">Expert Team</h3>
        </div>
        <div className="border p-6 rounded-lg hover:bg-primary hover:text-white">
          <img src={img2} alt="" className="mx-auto mb-2 " />
          <h3 className="text-lg font-bold">Expert Team</h3>
        </div>
        <div className="border p-6 rounded-lg hover:bg-primary hover:text-white">
          <img src={img3} alt="" className="mx-auto mb-2 " />
          <h3 className="text-lg font-bold">Expert Team</h3>
        </div>
        <div className="border p-6 rounded-lg hover:bg-primary hover:text-white">
          <img src={img4} alt="" className="mx-auto mb-2 " />
          <h3 className="text-lg font-bold">Expert Team</h3>
        </div>
        <div className="border p-6 rounded-lg hover:bg-primary hover:text-white">
          <img src={img5} alt="" className="mx-auto mb-2 " />
          <h3 className="text-lg font-bold">Expert Team</h3>
        </div>
        <div className="border p-6 rounded-lg hover:bg-primary hover:text-white">
          <img src={img6} alt="" className="mx-auto mb-2 " />
          <h3 className="text-lg font-bold">Expert Team</h3>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
