import AboutSection from "../components/AboutSection"
import BlogSection from "../components/BlogSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServiceSection"
import TestimonialSection from "../components/TestimonialSection"
import WhyChooseUs from "../components/WhyChooseUs"

const Home = ()=>{
    return(
        <>
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <WhyChooseUs/>
        <TestimonialSection/>
        <BlogSection/>
        </>
    )
}
export default Home