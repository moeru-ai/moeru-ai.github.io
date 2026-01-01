import type { ComponentRef, Ref } from 'react'

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
  ref?: Ref<ComponentRef<'svg'>>
}

export const MoeruAIBorderIcon = ({ color = 'currentColor', ref, ...props }: IconProps) => (
  <svg
    height="15"
    shape-rendering="crispEdges"
    viewBox="0 -0.5 34 34"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <path d="M13 0h1M5 1h1M7 1h1M19 2h2M11 3h1M21 3h1M1 4h1" stroke={color} />
    <path d="M14 0h1M16 1h1M19 7h1" stroke={color} />
    <path d="M15 0h1M6 1h1M17 2h1M0 5h1M21 5h1M0 6h1M18 7h1M20 7h1M0 8h1M1 9h4M10 9h4M17 9h3M4 10h2M9 10h4M19 10h2M2 11h10M20 11h1M1 12h2M8 12h3M20 12h7M0 13h2M9 13h2M20 13h2M26 13h2M0 14h1M9 14h2M15 14h1M19 14h2M27 14h2M0 15h1M9 15h2M15 15h1M18 15h2M28 15h1M0 16h1M4 16h2M9 16h2M14 16h3M18 16h1M28 16h2M0 17h1M9 17h2M15 17h1M17 17h2M29 17h1M0 18h1M9 18h2M16 18h2M29 18h2M0 19h1M4 19h2M9 19h1M16 19h1M30 19h1M0 20h1M9 20h1M15 20h2M30 20h2M0 21h1M8 21h1M15 21h1M31 21h1M0 22h1M15 22h1M31 22h2M0 23h2M7 23h1M14 23h1M23 23h1M32 23h1M1 24h7M14 24h1M23 24h1M32 24h1M7 25h2M13 25h2M22 25h3M32 25h2M8 26h6M23 26h2M33 26h1M13 27h1M24 27h1M33 27h1M13 28h1M24 28h2M33 28h1M13 29h1M24 29h2M33 29h1M13 30h1M23 30h3M33 30h1M13 31h1M21 31h3M25 31h1M33 31h1M13 32h2M20 32h2M25 32h2M32 32h2M14 33h7M26 33h7" stroke={color} />
    <path d="M16 0h1M4 2h1M10 2h1M12 2h1M3 4h2M0 7h1M1 8h1" stroke={color} />
    <path d="M8 1h1M17 1h1M4 3h1M1 5h1M11 8h1" stroke={color} />
    <path d="M9 1h1M12 1h1M21 4h1M10 8h1M12 8h1M18 8h1" stroke={color} />
    <path d="M13 1h1M2 4h1M20 6h1" stroke={color} />
    <path d="M5 2h1M9 2h1M18 2h1M10 3h1M12 3h1M20 3h1M21 6h1" stroke={color} />
  </svg>
)
