import { RepeatIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'

const daysAttention = [
  {
    day: 'Monday',
    schedule: 'Open 24 hours'
  },
  {
    day: 'Tuesday',
    schedule: 'Open 24 hours'
  }
]

const AttentionSchedule = () => {
  return (
    <Box>
      <Box paddingY={2}>
        {daysAttention.map((item, index) => (
          <Flex key={index} justifyContent="space-between" paddingBottom={2}>
            <Text>{item.day}</Text>
            <Text>{item.schedule}</Text>
          </Flex>
        ))}
      </Box>
      <HStack paddingBottom={2}>
        <RepeatIcon />
        <Text>Address</Text>
      </HStack>
      <HStack>
        <RepeatIcon />
        <Text>Place of service availability</Text>
      </HStack>
    </Box>
  )
}

export default AttentionSchedule
