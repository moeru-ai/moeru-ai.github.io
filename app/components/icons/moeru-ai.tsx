import type { ComponentRef, Ref } from 'react'

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never
  color?: string
  ref?: Ref<ComponentRef<'svg'>>
}

export const MoeruAIIcon = ({ color = 'currentColor', ref, ...props }: IconProps) => (
  <svg
    height="15"
    shape-rendering="crispEdges"
    viewBox="0 -0.5 34 34"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <path d="M13 0h1M21 3h1M21 6h1M1 8h1" stroke={color} />
    <path d="M14 0h1M6 1h1M12 3h1M2 4h1M21 4h1M19 7h1" stroke={color} />
    <path d="M15 0h1M16 1h1M5 2h1M17 2h1M4 3h1M10 3h1M21 5h1M0 7h1M18 7h1M20 7h1M10 8h1M1 9h4M10 9h4M17 9h3M4 10h2M9 10h4M19 10h2M2 11h10M20 11h1M1 12h2M8 12h3M20 12h7M0 13h2M9 13h2M20 13h2M26 13h2M0 14h1M9 14h2M15 14h1M19 14h2M27 14h2M0 15h1M9 15h2M15 15h1M18 15h2M28 15h1M0 16h1M4 16h2M9 16h2M14 16h3M18 16h1M28 16h2M0 17h1M9 17h2M15 17h1M17 17h2M29 17h1M0 18h1M9 18h2M16 18h2M29 18h2M0 19h1M4 19h2M9 19h1M16 19h1M30 19h1M0 20h1M9 20h1M15 20h2M30 20h2M0 21h1M8 21h1M15 21h1M31 21h1M0 22h1M15 22h1M31 22h2M0 23h2M7 23h1M14 23h1M23 23h1M32 23h1M1 24h7M14 24h1M23 24h1M32 24h1M7 25h2M13 25h2M22 25h3M32 25h2M8 26h6M23 26h2M33 26h1M13 27h1M24 27h1M33 27h1M13 28h1M24 28h2M33 28h1M13 29h1M24 29h2M33 29h1M13 30h1M23 30h3M33 30h1M13 31h1M21 31h3M25 31h1M33 31h1M13 32h2M20 32h2M25 32h2M32 32h2M14 33h7M26 33h7" stroke={color} />
    <path d="M16 0h1M4 2h1M9 2h1M20 3h1M1 4h1M4 4h1" stroke={color} />
    <path d="M5 1h1M10 2h1M20 2h1M3 4h1M0 5h1M0 6h1" stroke={color} />
    <path d="M7 1h1M13 1h1M17 1h1M19 2h1M12 8h1" stroke={color} />
    <path d="M8 1h1M12 2h1M18 2h1M11 3h1M0 8h1M11 8h1" stroke={color} />
    <path d="M9 1h1M12 1h1M1 5h1M20 6h1M18 8h1" stroke={color} />
    <path d="M14 1h2M13 3h1" stroke="#00f5d0" />
    <path d="M6 2h1M5 3h1" stroke="#01f8e5" />
    <path d="M7 2h2M8 3h1M8 4h1M14 4h1" stroke="#00f8e5" />
    <path d="M13 2h1" stroke="#01f5d1" />
    <path d="M14 2h1" stroke="#56f2d7" />
    <path d="M15 2h1" stroke="#00f9e5" />
    <path d="M16 2h1M4 5h1M6 5h1M16 5h1" stroke="#01e3e2" />
    <path d="M6 3h1" stroke="#01f9e4" />
    <path d="M7 3h1" stroke="#01f9e5" />
    <path d="M9 3h1M13 4h1" stroke="#00e3d8" />
    <path d="M14 3h1M7 4h1M15 4h1" stroke="#00f8e4" />
    <path d="M15 3h1M6 4h1" stroke="#00f9e4" />
    <path d="M16 3h1" stroke="#01f8e4" />
    <path d="M17 3h2M3 5h1M5 5h1M8 5h1M13 5h1" stroke="#00e2e2" />
    <path d="M19 3h1M10 4h1M17 4h1" stroke="#01e2e3" />
    <path d="M5 4h1" stroke="#00e3e2" />
    <path d="M9 4h1M17 11h2M15 13h2" stroke="#00e3d9" />
    <path d="M11 4h2M18 4h1M15 5h1" stroke="#01e2e2" />
    <path d="M16 4h1" stroke="#01e2d8" />
    <path d="M19 4h1M1 6h1" stroke="#01c8d4" />
    <path d="M20 4h1M10 5h2M9 6h1M15 6h1M7 7h1" stroke="#00c9d5" />
    <path d="M2 5h1M7 5h1M14 5h1" stroke="#01e3e3" />
    <path d="M9 5h1M17 5h1M7 6h1M14 12h6M8 13h1M12 13h3M17 13h3M1 14h1M5 14h4M11 14h3M18 14h1M1 15h5M11 15h3M11 16h2" stroke="#00e2e3" />
    <path d="M12 5h1M3 6h1M8 6h1M14 6h1" stroke="#01c8d5" />
    <path d="M18 5h1" stroke="#01c9d5" />
    <path d="M19 5h1M10 6h1M12 6h1M16 6h1M18 6h1M1 7h1M12 7h3M7 8h1M17 8h1" stroke="#01b6bf" />
    <path d="M20 5h1M2 6h1M17 16h1M1 17h8M11 17h4M16 17h1M1 18h5M11 18h5M3 19h1M10 19h6M11 20h2" stroke="#00c8d5" />
    <path d="M4 6h2" stroke="#00c8d4" />
    <path d="M6 6h1" stroke="#00e3e3" />
    <path d="M11 6h1M17 6h1M4 7h1M8 7h2M15 7h1M14 8h2M5 9h5M14 9h3M6 10h3M8 18h1M6 19h3M1 20h8M14 20h1M1 21h7M9 21h1M13 21h2M8 22h7M10 23h4" stroke="#00b6bf" />
    <path d="M13 6h1M11 7h1" stroke="#00b7be" />
    <path d="M19 6h1M2 7h1M16 7h1M2 8h1M6 8h1M9 8h1M16 8h1" stroke="#00b6be" />
    <path d="M3 7h1" stroke="#01b7be" />
    <path d="M5 7h1M17 7h1M3 8h2M13 8h1" stroke="#00b7bf" />
    <path d="M6 7h1" stroke="#00c9d4" />
    <path d="M10 7h1M5 8h1" stroke="#01b6be" />
    <path d="M8 8h1" stroke="#01b7bf" />
    <path d="M13 10h2M12 11h1M3 12h5M11 12h1M2 13h6M2 14h2" stroke="#56f2d6" />
    <path d="M15 10h4M13 11h4M19 11h1M12 12h2M11 13h1M4 14h1" stroke="#00f4d0" />
    <path d="M22 13h1M25 13h1M22 14h1M24 14h3M21 15h1M26 15h2M20 16h1" stroke="#d1ed3f" />
    <path d="M23 13h2M22 15h1" stroke="#d0f300" />
    <path d="M14 14h1M16 14h2M6 15h3M14 15h1M16 15h2M1 16h3M6 16h3M13 16h1" stroke="#00d2e0" />
    <path d="M21 14h1M20 15h1M24 15h2M19 16h1M24 16h4M19 17h10M18 18h2M22 18h3M27 18h2M17 19h1M24 19h1M28 19h2M19 20h1M29 20h1M26 21h1" stroke="#a0ec23" />
    <path d="M23 14h1M23 15h1M21 16h3" stroke="#b3ee41" />
    <path d="M6 18h2M1 19h2M10 20h1M13 20h1M10 21h3" stroke="#00bbc6" />
    <path d="M20 18h2M25 18h2M18 19h1M20 19h4M27 19h1M17 20h1M22 20h1M28 20h1" stroke="#7fec27" />
    <path d="M19 19h1M20 20h2M24 20h2M16 21h10M27 21h1M16 22h5M16 23h3M17 24h2" stroke="#7ce12b" />
    <path d="M25 19h2M18 20h1M23 20h1M26 20h2M28 21h1" stroke="#74df15" />
    <path d="M29 21h2M25 22h6M25 23h6M27 24h3M28 25h2" stroke="#85d830" />
    <path d="M1 22h7M2 23h5M8 23h2M8 24h6M9 25h4" stroke="#00b5cd" />
    <path d="M21 22h4M19 23h2M16 24h1M19 24h1M17 25h2" stroke="#87d714" />
    <path d="M15 23h1M15 24h1M15 25h1M14 26h2M25 26h1M30 26h1M14 27h2M25 27h2M29 27h4M14 28h4M21 28h1M26 28h7M14 29h10M27 29h6M14 30h7M27 30h5M15 31h4M16 32h2" stroke="#79c93f" />
    <path d="M21 23h2M24 23h1M31 23h1M20 24h3M24 24h3M30 24h2M16 25h1M19 25h3M25 25h3M30 25h2M17 26h4M27 26h3M31 26h1M16 27h1M18 27h3" stroke="#92cf25" />
    <path d="M16 26h1M26 26h1M17 27h1M18 28h3" stroke="#7ecc45" />
    <path d="M21 26h2M21 27h3M22 28h2" stroke="#69cc0c" />
    <path d="M32 26h1M27 27h2M26 29h1M21 30h2M26 30h1M32 30h1M14 31h1M19 31h2M26 31h7M15 32h1M18 32h2M27 32h5" stroke="#7dc549" />
  </svg>
)
