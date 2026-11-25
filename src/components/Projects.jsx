import { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { useLang } from "../hooks/useLang";

const ALL = "all";
const CATEGORIES = [ALL, "web", "uiux", "other"];

export default function Projects() {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState(ALL);

  const visible = useMemo(
    () =>
      projects
        .filter((p) => filter === ALL || p.category === filter)
        .map((p) => ({ ...p, title: p.title[lang], description: p.description[lang] })),
    [filter, lang]
  );

  return (
    <section id="projects" className="section">
      <SectionTitle eyebrow={t.projects.eyebrow} subtitle={t.projects.subtitle}>
        {t.projects.title}
      </SectionTitle>
      <FilterBar categories={CATEGORIES} labels={t.categories} active={filter} onChange={setFilter} />
      {visible.length > 0 ? (
        <div className="grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <p className="empty">{t.projects.empty}</p>
      )}
    </section>
  );
}
