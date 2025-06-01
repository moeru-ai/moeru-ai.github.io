import { Theme } from '@radix-ui/themes'

import { Hero } from './components/hero'

import '@radix-ui/themes/styles.css'
import 'virtual:uno.css'

import './app.css'
import { Nav } from './components/nav'

export const App = () => (
  <Theme accentColor="gray" grayColor="gray">
    {/* <Heading className="font-doto" size="9">
      MOERU AI
    </Heading> */}
    <Nav />
    <Hero />
  </Theme>
)
