import Header from "./sections/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Features from "./sections/Features";
import HowItIsWork from "./sections/HowItIsWork";
import Plans from "./sections/Plans";
import FAQs from "./sections/FAQs";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./CSS/output.css";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="breakable-container">
        <Home />
        <About />
        <Features />
        <HowItIsWork />
        <Contact />
        <Plans />
        <FAQs />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
