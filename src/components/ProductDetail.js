import { Box, Button, Divider, Flex, Heading, HStack, Image, Tag, Text, Textarea } from '@chakra-ui/react'
import NumberField from './NumberField'

const ProductDetail = () => {
  return (
    <Box display={{ md: 'flex' }} maxHeight="md">
      <Image objectFit="cover" src="https://bit.ly/code-beast" alt="Dan Abramov" width={['100%', '50%']} />
      <Box width={['100%', '50%']} padding={2} backgroundColor="white">
        <Heading as="h1" size="md">
          Product Name
        </Heading>
        <Text paddingTop={2}>Product Description</Text>
        <HStack spacing={6} paddingY={4}>
          <Text>Current Price</Text>
          <Text>Previous Price</Text>
          <Tag colorScheme="messenger">Discount</Tag>
        </HStack>
        <Divider />
        <Text paddingY={4}>Comments</Text>
        <Textarea placeholder="Add anything" height="150px" resize="none" />
        <Flex justifyContent="space-between" paddingTop={4}>
          <NumberField />
          <Button>Add (price)</Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default ProductDetail
