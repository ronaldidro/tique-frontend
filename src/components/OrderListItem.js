import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  ListItem,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  Tag,
  Text
} from '@chakra-ui/react'

const OrderListItem = () => {
  return (
    <ListItem>
      <Flex alignItems="center" paddingY={4}>
        <Box display="flex" alignItems="center">
          <Image
            boxSize="60px"
            borderRadius="md"
            objectFit="cover"
            src="https://bit.ly/prosper-baba"
            alt="Dan Abramov"
          />
          <Box paddingLeft={2}>
            <Text>Product Name</Text>
            <HStack>
              <Text>$10</Text>
              <Tag colorScheme="messenger">- 20%</Tag>
            </HStack>
          </Box>
        </Box>
        <Spacer />
        <HStack>
          <NumberInput size={['sm', 'md']} maxW={[16, 20]} defaultValue={1} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <IconButton size={['sm', 'md']} icon={<DeleteIcon />} />
        </HStack>
      </Flex>
      <Divider />
    </ListItem>
  )
}

export default OrderListItem
