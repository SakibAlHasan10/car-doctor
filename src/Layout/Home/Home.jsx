import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import CoreFeatures from "./CoreFeatures/CoreFeatures";
import OurTeam from "./OurTeam/OurTeam";
import PopularProduct from "./PopularProduct/PopularProduct";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Contact></Contact>
            <PopularProduct></PopularProduct>
            <OurTeam></OurTeam>
            <CoreFeatures></CoreFeatures>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;