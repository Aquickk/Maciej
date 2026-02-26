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
              <p className="text-brand-gray mt-1">0152 52 80 3782</p>
              <p className="text-brand-gray mt-1">0152 59 59 2836</p>
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
          {/* MAPA GOOGLE */}
        <div className="w-full h-[400px] md:h-full rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.0178025752907!2d10.40265!3d48.62239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f0f1c7e0e9b4f%3A0x7b6d0e6f0f0e0e0!2sAuf%20der%20Schanz%205%2C%2089437%20Haunsheim!5e0!3m2!1spl!2spl!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
