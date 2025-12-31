import type { Route } from './+types/home'

import { Welcome } from '../welcome/welcome'

const Home = () => <Welcome />

export const meta = (_: Route.MetaArgs) => [
  { title: 'Moeru AI' },
  { content: 'does kindness plus sadness equal to zero?', name: 'description' },
  { href: 'https://github.com/moeru-ai.png', rel: 'icon', type: 'image/png' },
]

export default Home
