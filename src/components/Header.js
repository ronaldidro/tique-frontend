import { Avatar, Box, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import AttentionSchedule from './AttentionSchedule'
import ModalButton from './ModalButton'

const Header = () => {
  return (
    <Box>
      <Box position="relative" height={150}>
        <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" width="full" maxHeight="full" />
        <ModalButton
          label="Schedule"
          position="absolute"
          top="0"
          right="0"
          marginTop={3}
          marginRight={3}
          colorScheme="whiteAlpha"
          modalTitle="Attention Schedule"
          modalChildren={<AttentionSchedule />}
        />
      </Box>
      <Box position="relative">
        <Box display={{ md: 'flex' }}>
          <Avatar marginTop="-5" size="2xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <VStack alignItems="left" marginTop={[2]} marginLeft={[0, 2]}>
            <Heading as="h1" size="md">
              Business Name
            </Heading>
            <Text>Business Description</Text>
            <Text>Business Address</Text>
          </VStack>
        </Box>
        <Box position="absolute" top="0" right="0" marginY={7} marginRight={3}>
          <Stack direction="row">
            <Avatar name="Whatsapp" />
            <Avatar name="Facebook" />
            <Avatar name="Instagram" />
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
