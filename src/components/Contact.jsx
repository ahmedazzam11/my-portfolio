import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/profile";
import { useLang } from "../hooks/useLang";
import Icon from "./Icons";

const EMPTY = { name: "", email: "", message: "" };

// returns the invalid field names (messages are translated at render time)
function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = true;
  if (!/^\S+@\S+\.\S+$/.test(v.email)) errors.email = true;
  if (v.message.trim().length < 10) errors.message = true;
  return errors;
}

export default function Contact() {
  const { lang, t } = useLang();
  const c = t.contact;
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      // TODO: replace this fake delay with a real request (Formspree, EmailJS, your API...)
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const info = [
    profile.email && { icon: "mail", text: profile.email, href: `mailto:${profile.email}` },
    { icon: "pin", text: profile.location[lang] },
    profile.github && { icon: "github", text: profile.github.replace(/^https?:\/\//, ""), href: profile.github },
    profile.linkedin && { icon: "linkedin", text: profile.linkedin.replace(/^https?:\/\//, ""), href: profile.linkedin },
    { icon: "spark", text: c.available },
  ].filter(Boolean);

  return (
    <section id="contact" className="section">
      <SectionTitle eyebrow={c.eyebrow} subtitle={c.subtitle}>
        {c.title}
      </SectionTitle>
      <div className="contact-grid">
        <ul className="info-card">
          {info.map((row) => (
            <li key={row.text}>
              <span className="info-icon">
                <Icon name={row.icon} size={18} />
              </span>
              {row.href ? (
                <a href={row.href} target="_blank" rel="noreferrer" dir="ltr">
                  {row.text}
                </a>
              ) : (
                <span>{row.text}</span>
              )}
            </li>
          ))}
        </ul>

        <form className="form" onSubmit={onSubmit} noValidate>
          <div className="row">
            <div className={`field ${errors.name ? "invalid" : ""}`}>
              <label htmlFor="name">{c.name}</label>
              <input id="name" value={values.name} onChange={update("name")} />
              {errors.name && <span className="error">{c.errors.name}</span>}
            </div>
            <div className={`field ${errors.email ? "invalid" : ""}`}>
              <label htmlFor="email">{c.email}</label>
              <input id="email" type="email" dir="ltr" value={values.email} onChange={update("email")} />
              {errors.email && <span className="error">{c.errors.email}</span>}
            </div>
          </div>
          <div className={`field ${errors.message ? "invalid" : ""}`}>
            <label htmlFor="message">{c.message}</label>
            <textarea id="message" rows="5" value={values.message} onChange={update("message")} />
            {errors.message && <span className="error">{c.errors.message}</span>}
          </div>

          {status === "success" && <div className="success">{c.success}</div>}
          {status === "error" && <div className="form-error">{c.failed}</div>}

          <button className="btn primary" type="submit" disabled={status === "sending"}>
            <Icon name="send" size={16} /> {status === "sending" ? c.sending : c.send}
          </button>
        </form>
      </div>
    </section>
  );
}
