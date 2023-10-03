import Header from "./sections/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import "./CSS/output.css";

export default function App() {
  return (
    <main className="container">
      <Header />
      <Home />
      <About />
    </main>
  );
}
