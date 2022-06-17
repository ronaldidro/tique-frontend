import { Avatar, Box, Heading, Image, Link, Stack, Text, VStack } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'
import AttentionSchedule from './AttentionSchedule'
import ModalButton from './ModalButton'

const Header = ({ companyData }) => {
  if (!companyData) return null

  return (
    <Box>
      <Box position="relative" height={150}>
        <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" width="full" maxHeight="full" />
        <ModalButton
          label="Horarios"
          position="absolute"
          top="0"
          right="0"
          marginTop={3}
          marginRight={3}
          colorScheme="whiteAlpha"
          modalTitle="Horarios de Atención"
          modalChildren={
            <AttentionSchedule
              attentionDays={companyData.attentionSchedule}
              address={companyData.address}
              servicePlace={companyData.servicePlace}
            />
          }
        />
      </Box>
      <Box position="relative">
        <Box display={{ md: 'flex' }}>
          <Avatar marginTop="-5" size="2xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <VStack alignItems="left" marginTop={[2]} marginLeft={[0, 2]}>
            <Heading as="h1" size="md">
              {companyData.name}
            </Heading>
            <Text>{companyData.description}</Text>
            <Text>{companyData.address}</Text>
          </VStack>
        </Box>
        <Box position="absolute" top="0" right="0" marginY={7} marginRight={3}>
          <Stack direction="row">
            {companyData.socialNetworks?.map(socialNetwork => (
              <Link key={socialNetwork.type} href={socialNetwork.url} isExternal>
                <RepeatIcon
                  boxSize={12}
                  bgColor={socialNetwork.type === 'fb' ? 'blue.500' : 'red.500'}
                  borderRadius="full"
                  color="white"
                />
              </Link>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

Header.propTypes = {
  companyData: PropTypes.object
}

export default Header
