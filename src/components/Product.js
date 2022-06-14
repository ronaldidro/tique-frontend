import { Box, Flex, Heading, Image, Spacer, Tag, Text } from '@chakra-ui/react'
import ProductDetailButton from './ProductDetailButton'

const Product = () => {
  return (
    <Flex shadow="md" borderWidth="1px" borderRadius="md">
      <Flex flexDirection="column" justifyContent="space-between" padding={3} width="full">
        <Box>
          <Flex justifyContent="space-between">
            <Heading as="h3" fontSize="md">
              Product Name
            </Heading>
            <Tag colorScheme="messenger">Discount</Tag>
          </Flex>
          <Text>Product Description</Text>
        </Box>
        <Flex alignItems="center">
          <ProductDetailButton />
          <Spacer />
          <Text as="del" paddingRight={2}>
            Previous Price
          </Text>
          <Text>Price</Text>
        </Flex>
      </Flex>
      <Image boxSize="130px" objectFit="cover" src="https://bit.ly/kent-c-dodds" alt="Dan Abramov" />
    </Flex>
  )
}

export default Product
