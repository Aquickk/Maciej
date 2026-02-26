import useReveal from "../hooks/useReveal";

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className={`
        max-w-[1200px] mx-auto px-6 py-20
        ${visible ? "section-visible" : "section-hidden"}
      `}
    >
      <div className="grid md:grid-cols-2 gap-16">

        {/* LEWA KOLUMNA */}
        <div className="relative -top-10">
          <h3 className="h3-with-line text-blue-600 font-semibold tracking-wide">
            KONTAKT
          </h3>

          <h2 className="font-heading text-4xl text-brand-gray-dark mt-2">
            Lassen Sie uns Ihr Projekt besprechen
          </h2>

          <p className="text-brand-gray mt-4 leading-relaxed">
            Wir stehen Ihnen für Fragen, Beratung und Terminvereinbarungen jederzeit zur Verfügung.
            Kontaktieren Sie uns telefonisch oder per E‑Mail – wir melden uns schnellstmöglich zurück.
          </p>

          {/* PANELE KONTAKTOWE */}
          <div className="mt-10 space-y-4">

            {/* PANEL TELEFON */}
            <div className="bg-white border border-black/10 rounded-xl p-5 shadow-sm">
              <h4 className="text-lg font-semibold text-brand-gray-dark">Telefon</h4>
              <p className="text-brand-gray mt-1">015252803782</p>
            </div>

            {/* PANEL EMAIL */}
            <div className="bg-white border border-black/10 rounded-xl p-5 shadow-sm">
              <h4 className="text-lg font-semibold text-brand-gray-dark">E‑Mail</h4>
              <p className="text-brand-gray mt-1">owczarskirollladen@gmail.com</p>
            </div>

            <div className="bg-white border border-black/10 rounded-xl p-5 shadow-sm">
              <h4 className="text-lg font-semibold text-brand-gray-dark">Adresse</h4>
              <p className="text-brand-gray mt-1">Auf der schanz 5, 89437 Haunsheim</p>
            </div>
          </div>
        </div>

        {/* PRAWA KOLUMNA — FORMULARZ */}
        <form className="bg-white rounded-3xl shadow-lg p-8 space-y-6">

          {/* Imię i nazwisko */}
          <div>
            <label className="block text-brand-gray-dark font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-black/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
              placeholder="Max Mustermann"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-brand-gray-dark font-medium mb-1">
              E‑Mail Adresse
            </label>
            <input
              type="email"
              className="w-full border border-black/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
              placeholder="email@beispiel.de"
              required
            />
          </div>

          {/* Telefon opcjonalnie */}
          <div>
            <label className="block text-brand-gray-dark font-medium mb-1">
              Telefonnummer (optional)
            </label>
            <input
              type="text"
              className="w-full border border-black/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
              placeholder="..."
            />
          </div>

          {/* Wiadomość */}
          <div>
            <label className="block text-brand-gray-dark font-medium mb-1">
              Nachricht
            </label>
            <textarea
              className="w-full border border-black/20 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:border-blue-600"
              placeholder="Ihre Nachricht..."
              required
            ></textarea>
          </div>

          {/* PRZYCISK */}
          <button
            type="submit"
            className="
              w-full bg-blue-600 text-white py-3 rounded-lg font-medium
              transition hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-blue-600
            "
          >
            Nachricht senden
          </button>

        </form>
      </div>
    </section>
  );
}
