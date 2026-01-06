import type { PropsWithChildren } from 'react'

// import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { Box, Container, Flex, Heading, Link, Section, Separator, Text } from '@radix-ui/themes'
import { useMemo } from 'react'

interface FooterLinkProps {
  href: string
  isExternal?: boolean

}

const FooterLink = (props: PropsWithChildren<FooterLinkProps>) => (
  <li>
    <Text as="p" mt="3" size="2">
      <Link
        color="gray"
        href={props.href}
        style={{ alignItems: 'center', display: 'inline-flex' }}
        // eslint-disable-next-line @masknet/jsx-no-logical
        target={props.isExternal ? '_blank' : undefined}
      >
        {props.children}
        {/* {props.isExternal && (
          <Flex asChild ml="2" style={{ color: 'var(--gray-8)' }}>
            <ArrowTopRightIcon />
          </Flex>
        )} */}
      </Link>
    </Text>
  </li>
)

export const Footer = () => {
  // eslint-disable-next-line @masknet/no-unsafe-date
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <Container mx={{ initial: '5', md: '9', sm: '7', xs: '6' }}>
      <Separator size="2" />
      <Section size="2">
        <Container size="1">
          <Flex direction={{ initial: 'column', md: 'row' }} gap="8" justify="between">
            <Box className="order-last md:mt-auto md:order-first">
              <Text color="gray" size="2">
                &copy;
                {' '}
                {year}
                {' '}
                Moeru AI
              </Text>
            </Box>
            <Box>
              <Heading as="h6" size="3">
                Projects
              </Heading>
              <ul>
                <FooterLink href="https://github.com/moeru-ai/airi" isExternal>AIRI</FooterLink>
                <FooterLink href="https://github.com/moeru-ai/xsai" isExternal>xsAI</FooterLink>
                <FooterLink href="https://github.com/moeru-ai/unspeech" isExternal>unSpeech</FooterLink>
                <FooterLink href="https://github.com/moeru-ai/ortts" isExternal>ORTTS</FooterLink>
              </ul>
            </Box>
            <Box>
              <Heading as="h6" size="3">
                Resources
              </Heading>
              <ul>
                <FooterLink href="https://blog.moeru.ai" isExternal>Blog</FooterLink>
              </ul>
            </Box>
            <Box>
              <Heading as="h6" size="3">
                Community
              </Heading>
              <ul>
                <FooterLink href="https://github.com/moeru-ai" isExternal>
                  GitHub
                </FooterLink>
                <FooterLink href="https://huggingface.co/moeru-ai" isExternal>
                  HuggingFace
                </FooterLink>
                <FooterLink href="https://x.com/moeru_ai" isExternal>
                  X (Twitter)
                </FooterLink>
                <FooterLink href="https://bsky.app/profile/moeru-ai.bsky.social" isExternal>
                  Bluesky
                </FooterLink>
                <FooterLink href="https://mastodon.social/@moeru_ai" isExternal>
                  Mastodon
                </FooterLink>
                <FooterLink href="https://discord.gg/bWYvMag8ge" isExternal>
                  Discord
                </FooterLink>
              </ul>
            </Box>
          </Flex>
        </Container>
      </Section>
    </Container>
  )
}
