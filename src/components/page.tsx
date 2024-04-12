import { Container, Text } from '@react-three/uikit'
import { Github, BookText } from '@react-three/uikit-lucide'

import { Avatar } from './ui/avatar'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'
// import { Switch } from './ui/switch'
import { colors } from './ui/theme'

export const Page = () => (
  <Card width={384}>
    <CardHeader flexDirection="row">
      <Avatar marginRight={8} src="https://github.com/moeru-ai.png" />
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
      <Button variant="secondary" flexDirection="row" width="100%" onClick={() => window.open('https://github.com/moeru-ai', '_blank')}>
        <Github color={colors.primary} marginRight={8} height={16} width={16} />
        <Text>GitHub</Text>
      </Button>
      <Button variant="secondary" flexDirection="row" width="100%" onClick={() => window.open('https://ai.kwaa.moe/hub', '_blank')}>
        <BookText marginRight={8} height={16} width={16} />
        <Text>Hub</Text>
      </Button>
    </CardContent>
  </Card>
)
