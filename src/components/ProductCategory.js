import { Divider, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import Product from './Product'

const ProductCategory = () => {
  return (
    <VStack align="self-start" marginY={4}>
      <Heading as="h2" size="sm">
        Category Name
      </Heading>
      <Divider />
      <SimpleGrid columns={[1, 2]} spacing="10px" width="full">
        <Product />
        <Product />
        <Product />
      </SimpleGrid>
    </VStack>
  )
}

export default ProductCategory
