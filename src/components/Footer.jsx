import { profile } from "../data/profile";
import { useLang } from "../hooks/useLang";
import Icon from "./Icons";

const SOCIALS = [
  ["github", "GitHub"],
  ["linkedin", "LinkedIn"],
  ["x", "X"],
  ["youtube", "YouTube"],
];

export default function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="footer">
      <a href="#home" className="logo" dir="ltr">
        <span className="br">&lt;</span>Ahmed<span className="br"> /&gt;</span>
      </a>
      <span className="copy">
        © {new Date().getFullYear()} {profile.fullName[lang]} · {t.footer.rights}
      </span>
      <div className="socials">
        {SOCIALS.filter(([key]) => profile[key]).map(([key, label]) => (
          <a key={key} href={profile[key]} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon name={key} size={18} />
          </a>
        ))}
      </div>
    </footer>
  );
}
