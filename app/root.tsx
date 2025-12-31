import type { LenisRef } from 'lenis/react'

import type { Route } from './+types/root'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { Theme } from '@radix-ui/themes'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import * as Scrollytelling from '@bsmnt/scrollytelling'

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

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details
      = error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  }
  else if (import.meta.env.DEV && error != null && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="mx-auto p-4 pt-16 container">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack != null && (
        <pre className="p-4 w-full overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}

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
          <Scrollytelling.Root>
            <Theme accentColor="teal" appearance="dark">
              {children}
            </Theme>
          </Scrollytelling.Root>
        </ReactLenis>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default App
