import React from "react";

interface StarIconProps {
  style: string;
  shadow: string;
}

export const StarIcon = ({ style, shadow }: StarIconProps) => {
  return (
    <svg
      className={style}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="starhadow">
        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={shadow} />
      </filter>
      <path d="m12 1-3 8-8 3 8 3 3 8 3-8 8-3-8-3z" filter="url(#starhadow)" />
    </svg>
  );
};
