import { SvgIcon } from "@mui/material";

export const IconArquitEng = ({ widthStyles, color, ...props }) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 601.000000 512"
      style={{ width: widthStyles || 50, height: "auto" }}
    >
      {/* <g
        fill="none"
        stroke={color || "#000000"}
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="40" y="60" width="432" height="300" rx="25" />
        <line x1="40" y1="320" x2="472" y2="320" />

        <polygon points="256,150 320,185 256,220 192,185" />
        <polygon points="192,185 192,250 256,285 256,220" />
        <polygon points="320,185 320,250 256,285 256,220" />

        <path d="M170 270 A140 100 0 0 0 342 270" />
        <polyline points="320,250 360,260 340,290" />
      </g> */}
      <g
  fill="none"
  stroke={color || "#000000"}
  strokeWidth="20"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* Monitor */}
  <rect x="40" y="60" width="432" height="300" rx="25" />
  <line x1="40" y1="320" x2="472" y2="320" />

  {/* Cubo */}
  <polygon points="256,110 320,145 256,180 192,145" />
  <polygon points="192,145 192,210 256,245 256,180" />
  <polygon points="320,145 320,210 256,245 256,180" />

  {/* Seta circular */}
  <path d="M170 260 A140 100 0 0 0 342 260" />
  <polyline points="320,240 360,250 340,280" />
  {/* <path d="M170 295 A140 100 0 0 0 342 295" /> */}
  {/* <polyline points="320,275 360,285 340,315" /> */}
</g>
    </SvgIcon>
  );
};