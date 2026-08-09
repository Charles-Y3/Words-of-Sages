import React, { useId } from "react";

// Shared gold rim; identity lives in the face colour, ink stays black on all three.
const SHARED = {
  rimLight: "#e9cd94",
  rimMid: "#c19a53",
  rimDark: "#8a6828",
  glow: "rgba(150, 112, 47, 0.28)"
};

// Face (medallion background) tinted per tradition; glyph ink is uniform black.
const FACE = {
  confucian: { light: "#fdf9ef", mid: "#f2e6c8", dark: "#ddc99b" }, // 儒 — white/cream
  buddhist: { light: "#e8b6ac", mid: "#c97a68", dark: "#973b2c" }, // 釋 — red (darker)
  taoist: { light: "#b9d2bc", mid: "#7ba084", dark: "#3f6b4f" } // 道 — green (darker)
};

const INK = "#241d12";

export default function TraditionEmblem({ tradition, char, size = 96 }) {
  const uid = useId().replace(/:/g, "");
  const face = FACE[tradition] ?? FACE.confucian;
  const faceId = `face-${uid}`;
  const rimId = `rim-${uid}`;
  const glossId = `gloss-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={char}
      focusable="false"
      style={{
        filter: `drop-shadow(0 3px 6px ${SHARED.glow}) drop-shadow(0 1px 2px rgba(54, 42, 28, 0.18))`
      }}
    >
      <defs>
        <linearGradient id={rimId} x1="15%" y1="5%" x2="85%" y2="95%">
          <stop offset="0%" stopColor={SHARED.rimLight} />
          <stop offset="42%" stopColor={SHARED.rimMid} />
          <stop offset="100%" stopColor={SHARED.rimDark} />
        </linearGradient>

        <radialGradient id={faceId} cx="34%" cy="30%" r="70%">
          <stop offset="0%" stopColor={face.light} />
          <stop offset="58%" stopColor={face.mid} />
          <stop offset="100%" stopColor={face.dark} />
        </radialGradient>

        <linearGradient id={glossId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fffdf6" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#fffdf6" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#fffdf6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Outer plate — quiet parchment ring */}
      <circle
        cx="100"
        cy="100"
        r="96"
        fill="var(--color-surface)"
        stroke="var(--color-border)"
        strokeWidth="1.25"
      />

      {/* Gold beveled rim */}
      <circle cx="100" cy="100" r="84" fill={`url(#${rimId})`} />

      {/* Parchment face */}
      <circle cx="100" cy="100" r="70" fill={`url(#${faceId})`} />

      {/* Soft groove */}
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke={SHARED.rimDark}
        strokeOpacity="0.28"
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="100"
        r="67.5"
        fill="none"
        stroke={SHARED.rimLight}
        strokeOpacity="0.35"
        strokeWidth="1.25"
      />

      {/* Lacquer highlight — restrained */}
      <ellipse cx="100" cy="70" rx="44" ry="24" fill={`url(#${glossId})`} />

      <text
        x="100"
        y="106"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-zh)"
        fontWeight="700"
        fontSize="82"
        fill={face.dark}
        opacity="0.3"
        aria-hidden="true"
      >
        {char}
      </text>
      <text
        x="100"
        y="104"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-zh)"
        fontWeight="700"
        fontSize="82"
        fill={INK}
      >
        {char}
      </text>
    </svg>
  );
}
