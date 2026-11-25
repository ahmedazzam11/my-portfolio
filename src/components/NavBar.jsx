import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "../utils/scroll";
import { useLang } from "../hooks/useLang";
import Icon from "./Icons";

const LINK_IDS = ["home", "about", "projects", "blog", "contact"];

export default function NavBar({ theme, toggleTheme }) {
  const { t, toggleLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const goTo = (e, id) => {
    scrollToSection(e, id);
    setOpen(false);
  };

  return (
    <header ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="logo" dir="ltr" onClick={(e) => goTo(e, "home")}>
        <span className="br">&lt;</span>Ahmed<span className="br"> /&gt;</span>
      </a>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {LINK_IDS.map((id) => (
          <a key={id} href={`#${id}`} onClick={(e) => goTo(e, id)}>
            {t.nav[id]}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="icon-btn lang-btn" onClick={toggleLang} aria-label={t.aria.lang}>
          {t.langButton}
        </button>
        <button className="icon-btn" onClick={toggleTheme} aria-label={t.aria.theme}>
          <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
        </button>
        <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label={t.aria.menu}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
