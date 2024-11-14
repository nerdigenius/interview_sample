import AboutSection from "./components/AboutSection"
import BookTableSection from "./components/BookTableSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import PopularItems from "./components/PopularItems"
import TestimonialSection from "./components/TestimonialSection"
function App() {

  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <PopularItems/>
      <BookTableSection/>
      <TestimonialSection/>
      <Footer/>
    </div>
  )
}

export default App
