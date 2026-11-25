import { useTypewriter } from "../hooks/useTypewriter";
import { useLang } from "../hooks/useLang";
import { scrollToSection } from "../utils/scroll";
import { profile } from "../data/profile";
import { HeroArt } from "./Illustration";
import Icon from "./Icons";

export default function Hero() {
  const { lang, t } = useLang();
  const role = useTypewriter(t.hero.roles);
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="pill">
            <Icon name="spark" size={14} /> {t.hero.pill}
          </span>
          <h1 className="name">{profile.fullName[lang]}</h1>
          <p className="role">
            <span className="typed">{role}</span>
            <span className="cursor">|</span>
          </p>
          <p className="lead">{t.hero.text}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn primary" onClick={(e) => scrollToSection(e, "contact")}>
              <Icon name="send" size={16} /> {t.hero.contact}
            </a>
            {profile.cv && (
              <a href={profile.cv} download className="btn ghost">
                <Icon name="download" size={16} /> {t.hero.cv}
              </a>
            )}
          </div>
        </div>
        <div className="hero-art">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}
