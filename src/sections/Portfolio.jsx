import useReveal from "../hooks/useReveal";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.png";

export default function Portfolio() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`
        max-w-[1280px] mx-auto px-6 py-20
        ${visible ? "section-visible" : "section-hidden"}
      `}
    >
      {/* NAGŁÓWEK */}
      <div className="text-center mb-16">
        <h3 className="h3-with-line text-blue-600 font-semibold tracking-wide">
          REFERENZEN
        </h3>

        <h2 className="font-heading text-4xl text-brand-gray-dark mt-2">
          Unsere abgeschlossenen Projekte
        </h2>
      </div>

      {/* UKŁAD 1 + 4 */}
      <div className="grid md:grid-cols-3 gap-6">

  {/* LEWA KOLUMNA — 1/3 SZEROKOŚCI */}
    <div className="hidden md:block col-span-1 rounded-3xl overflow-hidden shadow-lg h-full">
        <img
            src={p2}
            alt="Projekt"
            className="w-full h-full object-cover"
        />
    </div>


  {/* PRAWA KOLUMNA — 2/3 SZEROKOŚCI */}
  <div className="col-span-2 grid grid-cols-2 gap-6">
    {[p6, p3, p4, p5].map((img, index) => (
      <div
        key={index}
        className="rounded-3xl overflow-hidden shadow-lg group cursor-pointer aspect-square"
      >
        <img
          src={img}
          alt="Projekt"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ))}
  </div>

</div>

    </section>
  );
}
