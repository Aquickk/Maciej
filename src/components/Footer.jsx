import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-navy-light py-8 px-6 mt-20">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">


        {/* PRAWA STRONA — LOGO */}
        <img
          src={logo}
          alt="Fensterbau Logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="h-[50px] cursor-pointer transition hover:opacity-80"
        />

        {/* LEWA STRONA — TEKST */}
        <h4 className="text-sm text-brand-gray text-center md:text-left">
          © 2026 Owczarski Hoffmann. Alle Rechte vorbehalten.
        </h4>
      </div>
    </footer>
  );
}
