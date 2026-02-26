import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection for navbar shrink
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy active section detection
  const sectionIds = ["home", "about", "offer", "whyus", "portfolio", "faq", "contact"];
  const activeSection = useActiveSection(sectionIds);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "UBER UNS", href: "#about" },
    { name: "LEISTUNGEN", href: "#offer" },
    { name: "REFERENZEN", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white/10 backdrop-blur-md h-[40px]" : "bg-white h-[70px]"
        }`}
      >
        <nav className="px-4 h-full flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center">
            <img
            src={logo}
            alt="Logo"
            onClick={() => window.location.reload()}
            className={`cursor-pointer transition hover:opacity-80 ${
                scrolled ? "h-[40px]" : "h-[70px]"
            }`}
            />

          </div>

          {/* NAV LINKS — DESKTOP */}
          <ul className="hidden md:flex gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`
                      relative font-medium tracking-wide group transition-colors duration-300
                      ${isActive ? "text-blue-600" : "text-black hover:text-blue-600"}
                    `}
                  >
                    {link.name}
                    <span
                      className={`
                        absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    ></span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* BUTTON KONTAKT — DESKTOP */}
          <a
            href="#contact"
            className="hidden md:block bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700 transition"
          >
            KONTAKT
          </a>

          {/* HAMBURGER — MOBILE */}
          <button
            className="md:hidden flex flex-col gap-[5px] focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menu"
          >
            <span
              className={`h-[2px] w-6 bg-black transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-black transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-black transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-black/10">
            <ul className="flex flex-col px-5 py-4 gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");

                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`
                        block py-2 font-medium tracking-wide transition-colors duration-300
                        ${isActive ? "text-blue-600" : "text-black hover:text-blue-600"}
                      `}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}

              <li>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="block mt-2 bg-blue-600 text-white text-center px-5 py-2 font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  KONTAKT
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* FLOATING PHONE BUTTON */}
      <a
        href="tel:015252803782"
        className="
          fixed bottom-6 right-6 z-50
          bg-blue-600 text-white w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-xl
          hover:bg-blue-700 transition
          md:hidden
        "
        aria-label="Call us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.36-.27.53-.73.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      </a>
    </>
  );
}
