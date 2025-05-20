import AboutSection from "../components/AboutSection"
import BlogSection from "../components/BlogSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServiceSection"
import TestimonialSection from "../components/TestimonialSection"

const Home = ()=>{
    return(
        <>
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <TestimonialSection/>
        <BlogSection/>
        <Footer/>
        </>
    )
}
export default Home