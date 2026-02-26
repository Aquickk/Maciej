import aboutImg from "../assets/about2.png";
import aboutImg2 from "../assets/about.png";
import useReveal from "../hooks/useReveal";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`
        max-w-[1280px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-start
        ${visible ? "section-visible" : "section-hidden"}
      `}
    >
      {/* LEWA STRONA — TEKST */}
      <div>
        <h3 className="h3-with-line text-blue-600 font-semibold tracking-wide">
          TRADITION & ERFAHRUNG
        </h3>

        <h2 className="font-heading text-4xl text-brand-gray-dark mt-2">
          Über uns
        </h2>

        <p className="mt-6 text-brand-gray leading-relaxed">
          Unser Unternehmen ist seit über 10 Jahren erfolgreich auf dem Baumarkt tätig und spezialisiert sich auf den Bereich der Fenster- und Türentechnik. Wir führen alle Aufträge aus, wobei wir uns hauptsächlich auf den individuellen Wohnungsbau konzentrieren. Wir sind ein Team von Fachleuten mit hoher Qualifikation im Bauwesen, was sich in einer breiten Umsetzung von Projekten widerspiegelt. Wir bieten hochwertige Waren und Dienstleistungen sowie günstige Ausführungsfristen.
        </p>

        <p className="mt-4 text-brand-gray leading-relaxed">
          Wir realisieren Ihr Projekt umfassend, da wir in unserem Angebot eine breite Produktpalette führen: Fenster (Kunststoff-, Aluminium-, Holz-, Holz-Aluminium-Fenster); Außentüren und Lofttüren; Außenrollläden (Aufsatz-, Vorbau-, Integro- und Solar-Rollos); Fassadenjalousien, Innenjalousien; Refleksole; Terrassenpergolen; Garagentore; Fensterbänke (aus Aluminium, Stahl, PVC, MDF-Platten, Holz, Stein). Wir bieten zudem die fachgerechte Montage Ihrer Investition an. Unsere Spezialisten übernehmen auch gerne den Service für Ihre vorhandenen Fenster, Türen oder Rollläden.
        </p>
      </div>

      {/* PRAWA STRONA — DWA ZDJĘCIA */}
      <div className="flex flex-col gap-6">

        {/* GÓRNE ZDJĘCIE — POMNIEJSZONE */}
        <img
          src={aboutImg}
          alt="Über uns"
          className="
            w-[55%] mx-auto h-auto rounded-3xl shadow-lg object-cover
          "
        />

        {/* DOLNE ZDJĘCIE + BADGE */}
        <div className="relative">
          <img
            src={aboutImg2}
            alt="Über uns"
            className="
              w-full h-auto shadow-lg object-cover rounded-3xl
              [clip-path:polygon(0%_0%,82%_0%,100%_20%,100%_100%,18%_100%,0%_80%)]
            "
          />

          {/* BADGE — LEKKO WYSTAJE */}
          <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md">
            <span className="text-2xl font-bold">15+</span>
            <span className="ml-2 tracking-wide">JAHRE ERFAHRUNG</span>
          </div>
        </div>

      </div>
    </section>
  );
}
