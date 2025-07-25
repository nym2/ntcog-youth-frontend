import HeroCarousel from "../components/HeroCarousel";
import AboutUs from "../components/AboutUs";
import EventsSection from "../components/EventsSection";
import PartnerWithUs from "../components/PartnerWithUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <section id="hero">
        <HeroCarousel />
        <Navbar />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="events">
        <EventsSection />
      </section>

      <section id="partner">
        <PartnerWithUs />
      </section>

      <Footer />
    </>
  );
};

export default Home;
