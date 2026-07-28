import React from "react";
import sealUrl from "../assets/app-logo-seal.png";

export default function AppLogo({ size = 88, className }) {
  return (
    <img
      src={sealUrl}
      width={size}
      height={size}
      alt="Words of Sages 聖賢之言"
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.14),
        display: "block",
        objectFit: "cover"
      }}
      draggable={false}
    />
  );
}
