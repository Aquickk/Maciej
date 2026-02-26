import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Offer from "./sections/Offer";
import FAQ from "./sections/Q&A";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-brand.gray.light min-h-screen">
      {/* NAVBAR */}
      <Navbar />
      {/* SEKCJE STRONY */}
      <main className="pt-[70px]">
        <Hero />
        <About />
        <Offer />
        <Portfolio />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
