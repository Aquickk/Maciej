import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";
import img1 from "../assets/hero1.png";
import img2 from "../assets/hero2.png";
import img3 from "../assets/hero3.png";

export default function Hero() {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  const [ref, visible] = useReveal();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className={`
        w-full min-h-screen px-4 py-20 grid md:grid-cols-2 gap-12 items-center relative
        ${visible ? "section-visible" : "section-hidden"}
      `}
    >
      {/* LEWA STRONA */}
      <div>
        <h1 className="font-heading text-4xl md:text-5xl text-brand-gray-dark leading-tight">
          PROFESSIONELLE FENSTER &{" "}
          <span className="text-blue-600">ROLLLADEN MONTAGE</span>
        </h1>

        <p className="mt-6 text-brand-gray text-lg leading-relaxed">
          Ihr regionaler Experte für energieeffiziente Fenster und modernste
          Rollladensysteme. Erstklassige Qualität für Ihr Zuhause.
        </p>

        {/* PRZYCISKI */}
        <div className="mt-8 flex gap-4">
          <a
            href="#offer"
            className="
              bg-blue-600 text-white px-6 py-3 font-medium 
              border border-grey transition hover:bg-brand-red-dark
            "
          >
            LEISTUNGEN
          </a>

          <a
            href="#portfolio"
            className="
              bg-brand-red-dark text-white border border-grey px-6 py-3 
              font-medium transition hover:bg-blue-600 hover:text-white
            "
          >
            REFERENZEN
          </a>
        </div>
      </div>

      {/* PRAWA STRONA — SLIDER */}
      <div className="relative w-full h-[650px] overflow-hidden shadow-xl">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Fenster Montage"
            className={`
              absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700
              ${index === current ? "opacity-100" : "opacity-0"}
              [clip-path:polygon(18%_0%,100%_0%,100%_80%,82%_100%,0%_100%,0%_25%)]
            `}
          />
        ))}

        {/* RING */}
        <div className="absolute inset-0 ring-1 ring-black/10 pointer-events-none"></div>

        {/* MAŁY SLIDER — KWADRACIKI */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                w-3 h-3 rounded-sm transition 
                ${current === index ? "bg-blue-600" : "bg-white/70"}
              `}
            ></button>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="absolute bottom-2 text-cream-dim text-xs tracking-[0.15em] uppercase mb-3 animate-scroll-text-sync">
          Scroll
        </span>

        <div className="relative w-[2px] h-14 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-600 via-blue-600/40 to-transparent animate-scroll-line-sync" />
        </div>
      </div>
    </section>
  );
}
