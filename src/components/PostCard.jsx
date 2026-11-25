import { useLang } from "../hooks/useLang";
import { PostArt } from "./Illustration";
import Icon from "./Icons";

export default function PostCard({ icon, date, title, link }) {
  const { t } = useLang();
  return (
    <a className="post" href={link} target="_blank" rel="noreferrer">
      <div className="post-thumb">
        <PostArt kind={icon} />
      </div>
      <div className="post-body">
        <h3>{title}</h3>
        <span className="post-date">
          <Icon name="calendar" size={14} /> {t.date(date)}
        </span>
      </div>
    </a>
  );
}
