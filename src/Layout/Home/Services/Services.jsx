import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="text-center mt-24">
      <h3 className="text-xl font-bold mb-5 text-primary">Service</h3>
      <h2 className="text-5xl font-bold mb-5">Our Service Area</h2>
      <p className="md:w-[650px] mx-auto mb-10">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don&apos;t look even slightly believable.{" "}
      </p>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <button className="btn bg-[#0000] border-primary hover:bg-primary hover:text-white hover:border-white text-primary mt-12">
        More Services
      </button>
    </div>
  );
};

export default Services;
