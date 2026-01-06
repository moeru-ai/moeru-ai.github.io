import type { Route } from './+types/home'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { Hero } from '~/components/hero'

const Home = () => (
  <>
    <Header />
    <Hero />
    <div className="min-h-screen">
      TODO
    </div>
    <Footer />
  </>
)

export const meta = (_: Route.MetaArgs) => [
  { title: 'Moeru AI' },
  { content: 'does kindness plus sadness equal to zero?', name: 'description' },
  { href: 'https://github.com/moeru-ai.png', rel: 'icon', type: 'image/png' },
]

export default Home
