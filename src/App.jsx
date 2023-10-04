import Header from "./sections/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Features from "./sections/Features";
import HowItIsWork from "./sections/HowItIsWork";
import "./CSS/output.css";

export default function App() {
  return (
    <main className="container">
      <Header />
      <Home />
      <About />
      <Features />
      <HowItIsWork />
    </main>
  );
}
