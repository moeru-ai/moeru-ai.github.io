import type { Route } from './+types/home'

import { Welcome } from '../welcome/welcome'

const Home = () => <Welcome />

export const meta = (_: Route.MetaArgs) => [
  { title: 'New React Router App' },
  { content: 'Welcome to React Router!', name: 'description' },
]

export default Home
