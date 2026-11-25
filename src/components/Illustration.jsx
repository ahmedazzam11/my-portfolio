import { useId } from "react";

/* ---------- Hero: laptop on a desk (pure SVG, themed with CSS variables) ---------- */
export function HeroArt() {
  const id = useId();
  return (
    <svg viewBox="0 0 440 340" className="hero-art-svg" role="img" aria-label="Laptop with code">
      <defs>
        <radialGradient id={`${id}g`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent-2)" />
        </linearGradient>
      </defs>
      <circle cx="220" cy="160" r="150" fill={`url(#${id}g)`} />
      <circle cx="220" cy="160" r="128" fill="none" stroke="var(--accent)" strokeOpacity="0.35" strokeDasharray="3 7" />

      {/* books */}
      <rect x="40" y="276" width="230" height="16" rx="4" fill="var(--surface-2)" stroke="var(--border)" />
      <rect x="52" y="260" width="206" height="16" rx="4" fill="var(--surface)" stroke="var(--border)" />
      <rect x="64" y="262" width="60" height="4" rx="2" fill={`url(#${id}s)`} />

      {/* laptop */}
      <rect x="96" y="70" width="248" height="164" rx="12" fill="#0a0c10" stroke={`url(#${id}s)`} strokeWidth="3" />
      <rect x="106" y="80" width="228" height="144" rx="6" fill="#10131a" />
      <circle cx="120" cy="92" r="3.5" fill="#ff5f57" />
      <circle cx="132" cy="92" r="3.5" fill="#febc2e" />
      <circle cx="144" cy="92" r="3.5" fill="#28c840" />
      <g strokeLinecap="round" strokeWidth="6">
        <line x1="122" y1="116" x2="190" y2="116" stroke="var(--accent)" />
        <line x1="198" y1="116" x2="250" y2="116" stroke="#8a93a6" />
        <line x1="136" y1="134" x2="228" y2="134" stroke="var(--accent-2)" />
        <line x1="136" y1="152" x2="200" y2="152" stroke="#8a93a6" />
        <line x1="208" y1="152" x2="268" y2="152" stroke="var(--accent)" />
        <line x1="136" y1="170" x2="250" y2="170" stroke="var(--accent-2)" />
        <line x1="122" y1="188" x2="176" y2="188" stroke="#8a93a6" />
        <line x1="184" y1="188" x2="214" y2="188" stroke="var(--accent)" />
      </g>
      <path d="M70 234h300l-14 22a10 10 0 0 1-8 4H92a10 10 0 0 1-8-4z" fill="var(--surface-2)" stroke="var(--border)" />
      <rect x="190" y="236" width="60" height="5" rx="2.5" fill="var(--border)" />

      {/* floating code badge */}
      <g className="float">
        <rect x="316" y="44" width="76" height="52" rx="14" fill="var(--surface)" stroke={`url(#${id}s)`} strokeWidth="2" />
        <text x="354" y="78" textAnchor="middle" fontSize="22" fontWeight="700" fontFamily="monospace" fill="var(--accent)">&lt;/&gt;</text>
      </g>

      {/* mug */}
      <rect x="312" y="228" width="46" height="46" rx="10" fill="var(--surface-2)" stroke="var(--border)" />
      <path d="M358 240h8a8 8 0 0 1 0 22h-8" fill="none" stroke="var(--border)" strokeWidth="5" />
      <text x="335" y="258" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="monospace" fill="var(--accent)">&lt;/&gt;</text>
      <path d="M326 216c-5-6 5-10 0-16M340 216c-5-6 5-10 0-16" fill="none" stroke="var(--muted)" strokeOpacity="0.6" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Project card artwork: gradient + pattern + line icon ---------- */
const THEMES = {
  web:   { from: "#b6ff3b", to: "#19e6c1", ink: "#07140a" },
  uiux:  { from: "#7c5cff", to: "#ff6bd6", ink: "#ffffff" },
  other: { from: "#19a7ff", to: "#19e6c1", ink: "#ffffff" },
};

const GLYPHS = {
  shop: (
    <>
      <path d="M-26 -10h52l-6 42h-40z" />
      <path d="M-12 -10v-8a12 12 0 0 1 24 0v8" />
    </>
  ),
  frames: (
    <>
      <rect x="-34" y="-26" width="38" height="30" rx="6" />
      <rect x="-4" y="-6" width="38" height="30" rx="6" />
      <circle cx="-15" cy="-11" r="4" />
      <path d="M8 6l8 6 8-6" />
    </>
  ),
  network: (
    <>
      <circle cx="0" cy="0" r="9" />
      <circle cx="-38" cy="-22" r="6" />
      <circle cx="38" cy="-22" r="6" />
      <circle cx="-38" cy="24" r="6" />
      <circle cx="38" cy="24" r="6" />
      <path d="M-7 -6L-33 -19M7 -6L33 -19M-7 6L-33 21M7 6L33 21" />
    </>
  ),
  chart: (
    <>
      <path d="M-34 28h68" />
      <rect x="-28" y="2" width="14" height="26" rx="3" />
      <rect x="-7" y="-14" width="14" height="42" rx="3" />
      <rect x="14" y="-30" width="14" height="58" rx="3" />
    </>
  ),
  browser: (
    <>
      <rect x="-38" y="-28" width="76" height="56" rx="8" />
      <path d="M-38 -14h76" />
      <circle cx="-28" cy="-21" r="1.5" />
      <circle cx="-21" cy="-21" r="1.5" />
      <path d="M-28 -2h30M-28 8h46M-28 18h22" />
    </>
  ),
};

export function CardArt({ category, glyph }) {
  const id = useId();
  const t = THEMES[category] ?? THEMES.web;
  return (
    <svg viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" className="card-art" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}b`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={t.from} />
          <stop offset="1" stopColor={t.to} />
        </linearGradient>
      </defs>
      <rect width="320" height="160" fill={`url(#${id}b)`} />
      <circle cx="270" cy="20" r="70" fill="#fff" fillOpacity="0.14" />
      <circle cx="40" cy="150" r="60" fill="#000" fillOpacity="0.1" />
      <circle cx="160" cy="80" r="50" fill="#fff" fillOpacity="0.16" />
      <g transform="translate(160 80)" fill="none" stroke={t.ink} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {GLYPHS[glyph] ?? GLYPHS.browser}
      </g>
    </svg>
  );
}

/* ---------- Blog post icons ---------- */
const POST_ICONS = {
  git: (
    <>
      <circle cx="-14" cy="-18" r="7" />
      <circle cx="-14" cy="18" r="7" />
      <circle cx="16" cy="-4" r="7" />
      <path d="M-14 -11v22M-14 4c0-8 14-4 24-8" />
    </>
  ),
  react: (
    <>
      <ellipse rx="28" ry="11" />
      <ellipse rx="28" ry="11" transform="rotate(60)" />
      <ellipse rx="28" ry="11" transform="rotate(120)" />
      <circle r="4" fill="currentColor" />
    </>
  ),
  editor: (
    <>
      <path d="M-26 -22l-12 22 12 22" />
      <path d="M26 -22l12 22-12 22" />
      <path d="M8 -26l-16 52" />
    </>
  ),
};

export function PostArt({ kind }) {
  return (
    <svg viewBox="-50 -40 100 80" className="post-art" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {POST_ICONS[kind]}
      </g>
    </svg>
  );
}
