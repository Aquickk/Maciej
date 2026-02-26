import useReveal from "../hooks/useReveal";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import offer4 from "../assets/offer4.png";

export default function Offer() {
  const [ref, visible] = useReveal();

    const items = [
        { img: offer1, title: "Fenster", desc: "Professionelle Installation moderner Fenster." },
        { img: offer2, title: "Rollläden", desc: "Effiziente Lösungen für Sonnenschutz und Sicherheit." },
        { img: offer3, title: "Türe", desc: "Hochwertige Türen für Innen- und Außenbereiche." },
        { img: offer4, title: "Andere", desc: "Fusboden und Sonnenschutz montage" },
    ];


  return (
    <section
      id="offer"
      ref={ref}
      className={`
        max-w-[1280px] mx-auto px-6 py-20
        ${visible ? "section-visible" : "section-hidden"}
      `}
    >
      {/* NAGŁÓWEK */}
      <div className="text-center mb-16">
        <h3 className="h3-with-line text-blue-600 font-semibold tracking-wide">
          LEISTUNGEN
        </h3>

        <h2 className="font-heading text-4xl text-brand-gray-dark mt-2">
          Unser Angebot für Ihr Projekt
        </h2>

        <p className="text-brand-gray mt-3">
          Maßgeschneiderte Lösungen für Neubau und Sanierung.
        </p>
      </div>

      {/* KAFELKI */}
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flip-card relative rounded-3xl overflow-hidden shadow-lg cursor-pointer h-[350px]"
          >
            <div className="flip-inner w-full h-full">

              {/* FRONT — zdjęcie */}
              <div className="flip-front">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
                  {item.title}
                </div>
              </div>

              {/* BACK — tekst */}
            <div className="flip-back bg-white border-t border-black/10 flex flex-col items-center justify-center text-blue-600 px-6 text-center">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>

            </div>


            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
