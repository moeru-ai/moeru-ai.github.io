import { Container, Text } from '@react-three/uikit'
import { BookText, Github } from '@react-three/uikit-lucide'

import src from '../assets/moeru-ai.png'
import { Avatar } from './ui/avatar'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
// import { Switch } from './ui/switch'
import { colors } from './ui/theme'

export const Page = () => (
  <Card width={384}>
    <CardHeader flexDirection="row">
      <Avatar marginRight={8} src={src} />
      <Container flexDirection="column">
        <CardTitle>
          <Text>Moeru AI Research</Text>
        </CardTitle>
        <CardDescription>
          <Text>@moeru-ai</Text>
        </CardDescription>
      </Container>
      {/* <Switch marginLeft="auto" /> */}
    </CardHeader>
    <CardContent flexDirection="column" gap={16}>
      <Button flexDirection="row" onClick={() => window.open('https://github.com/moeru-ai', '_blank')} variant="secondary" width="100%">
        <Github color={colors.primary} height={16} marginRight={8} width={16} />
        <Text>GitHub</Text>
      </Button>
      <Button flexDirection="row" onClick={() => window.open('https://ai.kwaa.moe/hub', '_blank')} variant="secondary" width="100%">
        <BookText height={16} marginRight={8} width={16} />
        <Text>Hub</Text>
      </Button>
    </CardContent>
  </Card>
)
