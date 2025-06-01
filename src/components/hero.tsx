import { Box } from '@radix-ui/themes'

import Lanyard from './reactbits/Lanyard/Lanyard'

export const Hero = () => (
  <Box className="h-screen w-screen" style={{ background: 'var(--gray-a2)' }}>
    <Lanyard gravity={[0, -40, 0]} position={[0, 0, 20]} />
  </Box>
)
