import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import CoreFeatures from "./CoreFeatures/CoreFeatures";
import OurTeam from "./OurTeam/OurTeam";
import PopularProduct from "./PopularProduct/PopularProduct";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
            <Contact></Contact>
            <PopularProduct></PopularProduct>
            <OurTeam></OurTeam>
            <CoreFeatures></CoreFeatures>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;