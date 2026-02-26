import useReveal from "../hooks/useReveal";

export default function FAQ() {
  const [ref, visible] = useReveal();

  const questions = [
    {
      q: "Wie lange dauert die Montage von Fenstern?",
      a: "Die Montagezeit hängt von der Anzahl und Art der Fenster ab. In den meisten Fällen dauert der Einbau eines Standardfensters etwa 1-2 Stunden."
    },
    {
      q: "Muss ich während der Montage zu Hause sein?",
      a: "Es ist empfehlenswert, dass jemand vor Ort ist, um Zugang zu ermöglichen und eventuelle Fragen direkt zu klären."
    },
    {
      q: "Bieten Sie auch die Demontage alter Fenster und Türen an?",
      a: "Ja, wir übernehmen sowohl die fachgerechte Demontage als auch die umweltgerechte Entsorgung der alten Elemente."
    },
    {
      q: "Welche Arten von Rollläden montieren Sie?",
      a: "Wir installieren Aufsatz-, Vorbau-, Unterputz- und Solar-Rollläden sowie Raffstores und andere Sonnenschutzsysteme."
    },
        {
      q: "Kann ich Fenster und Türen auch über Sie bestellen?",
      a: "Ja, wir bieten sowohl Lieferung als auch Montage an. Wir beraten Sie gerne bei der Auswahl der passenden Produkte."
    },
        {
      q: "Führen Sie auch Reparaturen durch?",
      a: "Unsere Spezialisten übernehmen Reparaturen und Servicearbeiten an Fenstern, Türen und Rollläden - unabhängig vom Hersteller."
    },
        {
      q: "Wie bereite ich meine Wohnung auf die Montage vor?",
      a: "Bitte räumen Sie den Arbeitsbereich frei und schützen Sie empfindliche Gegenstände. Den Rest übernehmen wir."
    },
        {
      q: "Bieten Sie auch zusätzliche Leistungen wie Bodenmontage oder Sonnenschutz an?",
      a: "Ja, neben Fenster-, Tür- und Rollladenmontage bieten wir auch Bodenverlegung sowie die Installation verschiedener Sonnenschutzlösungen an."
    },
  ];

  return (
    <section
      id="faq"
      ref={ref}
      className={`
        max-w-[900px] mx-auto px-6 py-20
        ${visible ? "section-visible" : "section-hidden"}
      `}
    >
      {/* NAGŁÓWEK */}
      <div className="text-center mb-12">
        <h3 className="h3-with-line text-blue-600 font-semibold tracking-wide">
          FRAGEN & ANTWORTEN
        </h3>

        <h2 className="font-heading text-4xl text-brand-gray-dark mt-2">
          Häufig gestellte Fragen
        </h2>

        <p className="text-brand-gray mt-3">
          Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Dienstleistungen.
        </p>
      </div>

      {/* LISTA PYTAŃ */}
      <div className="space-y-8">
        {questions.map((item, index) => (
          <div key={index} className="pb-6 border-b border-black/10">
            <h4 className="text-xl font-semibold text-brand-gray-dark">
              {item.q}
            </h4>
            <p className="text-brand-gray mt-2 leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
