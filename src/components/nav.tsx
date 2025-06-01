import { Icon } from '@iconify/react'
import { Box, IconButton, Text } from '@radix-ui/themes'

export const Nav = () => {
  const navigate = (url: string) => () => window.open(url, '_blank', 'noopener')

  return (
    <Box className="absolute w-screen z-10">
      <Box className="w-full flex p-2 lg:p-4 gap-2 justify-center items-center">
        <Text className="font-doto leading-none" size="6">MOERU AI</Text>
        <Box className="grow" />
        <IconButton className="hover:cursor-pointer" data-test-id="npm" onClick={navigate('https://npmjs.com/org/moeru-ai')} variant="soft">
          <Icon icon="simple-icons:npm" />
        </IconButton>
        <IconButton className="hover:cursor-pointer" data-test-id="huggingface" onClick={navigate('https://huggingface.com/moeru-ai')} variant="soft">
          <Icon icon="simple-icons:huggingface" />
        </IconButton>
        <IconButton className="hover:cursor-pointer mr-0" data-test-id="github" onClick={navigate('https://github.com/moeru-ai')} variant="soft">
          <Icon icon="simple-icons:github" />
        </IconButton>
      </Box>
    </Box>
  )
}
