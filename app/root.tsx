import type { LenisRef } from 'lenis/react'

import type { Route } from './+types/root'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import { Theme } from '~/components/theme'

import './utils/gsap'

import 'uno.css'
import './styles/font.css'
import '@radix-ui/themes/styles.css'

export const links: Route.LinksFunction = () => [
  { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
  {
    crossOrigin: 'anonymous',
    href: 'https://fonts.gstatic.com',
    rel: 'preconnect',
  },
]

const App = () =>
  <Outlet />

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const lenis = useLenis()
  const lenisRef = useRef<LenisRef>(null!)

  useEffect(() => {
    const update: gsap.TickerCallback = time =>
      lenisRef.current?.lenis?.raf(time * 1000)

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => gsap.ticker.remove(update)
  }, [])

  useEffect(() => {
    lenis?.on('scroll', () => ScrollTrigger.update())
  }, [lenis])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="https://github.com/moeru-ai.png" rel="icon" type="image/png" />
        <Meta />
        <Links />
      </head>
      <body>
        <ReactLenis
          options={{
            autoRaf: false,
            // direction: 'vertical',
            duration: 1.2,
            easing: t => Math.min(1, 1.001 - 2 ** (-10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            // gestureDirection: 'vertical',
            infinite: false,
            // smooth: true,
            // smoothTouch: false,
            touchMultiplier: 2,
          }}
          ref={lenisRef}
          root
        >
          <Theme>
            {children}
          </Theme>
        </ReactLenis>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export { ErrorBoundary } from '~/components/error-boundary'
export default App
