import SectionTitle from "./SectionTitle";
import PostCard from "./PostCard";
import { posts } from "../data/posts";
import { useLang } from "../hooks/useLang";

export default function Blog() {
  const { lang, t } = useLang();
  return (
    <section id="blog" className="section">
      <SectionTitle eyebrow={t.blog.eyebrow} subtitle={t.blog.subtitle}>
        {t.blog.title}
      </SectionTitle>
      <div className="posts">
        {posts.map((p) => (
          <PostCard key={p.id} {...p} title={p.title[lang]} />
        ))}
      </div>
    </section>
  );
}
