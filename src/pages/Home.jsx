import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import AboutUs from '../components/AboutUs'
import EventsSection from '../components/EventsSection'
import PartnerWithUs from '../components/PartnerWithUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroCarousel />
      <AboutUs />
      <EventsSection />
      <PartnerWithUs />
      <Footer />
    </div>
  )
}

export default Home
