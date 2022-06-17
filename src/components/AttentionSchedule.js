import { RepeatIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const AttentionSchedule = ({ attentionDays, address, servicePlace }) => {
  return (
    <Box>
      <Box paddingY={2}>
        {attentionDays.map((item, index) => (
          <Flex key={index} justifyContent="space-between" paddingBottom={2}>
            <Text>{item.day}</Text>
            <Text>{item.schedule}</Text>
          </Flex>
        ))}
      </Box>
      <HStack paddingBottom={2}>
        <RepeatIcon />
        <Text>{address}</Text>
      </HStack>
      <HStack>
        <RepeatIcon />
        <Text>{servicePlace}</Text>
      </HStack>
    </Box>
  )
}

AttentionSchedule.propTypes = {
  attentionDays: PropTypes.array,
  address: PropTypes.string,
  servicePlace: PropTypes.string
}

export default AttentionSchedule
