import React, { useId } from "react";

// Shared parchment seal + gold rim; identity lives in the glyph.
const SHARED = {
  faceLight: "#e6d7b4",
  faceMid: "#d4c19a",
  faceDark: "#b89f72",
  rimLight: "#e9cd94",
  rimMid: "#c19a53",
  rimDark: "#8a6828",
  glow: "rgba(150, 112, 47, 0.28)"
};

const GLYPH = {
  confucian: "#fff8e8", // 儒 — creamy white
  buddhist: "#a8362a", // 釋 — cinnabar
  taoist: "#2c5c4a" // 道 — jade
};

export default function TraditionEmblem({ tradition, char, size = 96 }) {
  const uid = useId().replace(/:/g, "");
  const text = GLYPH[tradition] ?? GLYPH.taoist;
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
          <stop offset="0%" stopColor={SHARED.faceLight} />
          <stop offset="58%" stopColor={SHARED.faceMid} />
          <stop offset="100%" stopColor={SHARED.faceDark} />
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
        fill={SHARED.rimDark}
        opacity={tradition === "confucian" ? 0.4 : 0.18}
        aria-hidden="true"
      >
        {char}
      </text>
      {tradition === "confucian" && (
        <text
          x="100"
          y="104"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-zh)"
          fontWeight="700"
          fontSize="82"
          fill="none"
          stroke={SHARED.rimDark}
          strokeWidth="3.5"
          strokeOpacity="0.35"
          paintOrder="stroke"
          aria-hidden="true"
        >
          {char}
        </text>
      )}
      <text
        x="100"
        y="104"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-zh)"
        fontWeight="700"
        fontSize="82"
        fill={text}
      >
        {char}
      </text>
    </svg>
  );
}
