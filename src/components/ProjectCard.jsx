import { useLang } from "../hooks/useLang";
import { CardArt } from "./Illustration";
import Icon from "./Icons";

export default function ProjectCard({ title, description, category, glyph, code, demo }) {
  const { t } = useLang();
  return (
    <article className="card">
      <div className="card-thumb">
        <CardArt category={category} glyph={glyph} />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-actions">
          {code && (
            <a href={code} target="_blank" rel="noreferrer">
              <Icon name="github" size={16} /> {t.projects.code}
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="view">
              <Icon name="eye" size={16} /> {t.projects.view}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
