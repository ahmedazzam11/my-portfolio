import SectionTitle from "./SectionTitle";
import { useLang } from "../hooks/useLang";

const STAT_VALUES = ["80+", "5", "2"];

const SKILLS = [
  { name: "UI/UX (Figma)", level: 80 },
  { name: "HTML & CSS", level: 85 },
  { name: "Bootstrap", level: 80 },
  { name: "JavaScript", level: 60 },
  { name: "React", level: 50 },
];

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section">
      <SectionTitle eyebrow={t.about.eyebrow}>{t.about.title}</SectionTitle>
      <div className="about-grid">
        <div className="about-text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <div className="stats">
            {STAT_VALUES.map((value, i) => (
              <div key={i} className="stat">
                <strong>{value}</strong>
                <span>{t.about.stats[i]}</span>
              </div>
            ))}
          </div>
        </div>
        <ul className="skills">
          {SKILLS.map((skill) => (
            <li key={skill.name}>
              <div className="skill-head">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: `${skill.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
