import { Box, Button, Divider, Flex, Heading, HStack, Image, Tag, Text, Textarea } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { convertToPercent, getDiscountedPrice } from '../utils'
import NumberField from './NumberField'

const ProductDetail = ({ productData }) => {
  console.log('🚀 ~ file: ProductDetail.js ~ line 6 ~ ProductDetail ~ productData', productData)
  return (
    <Box display={{ md: 'flex' }} maxHeight="md">
      <Image objectFit="cover" src="https://bit.ly/code-beast" alt="Dan Abramov" width={['100%', '50%']} />
      <Box width={['100%', '50%']} padding={2} backgroundColor="white">
        <Heading as="h1" size="md">
          {productData.name}
        </Heading>
        <Text paddingTop={2}>{productData.description}</Text>
        <HStack spacing={5} paddingY={4}>
          <Text>$ {getDiscountedPrice(productData.price, productData.discount)}</Text>
          {productData.discount > 0 && <Text as="del">$ {productData.price}</Text>}
          {productData.discount > 0 && <Tag colorScheme="messenger">- {convertToPercent(productData.discount)}</Tag>}
        </HStack>
        <Divider />
        <Text paddingY={4}>Comments</Text>
        <Textarea placeholder="Add anything" height="150px" resize="none" />
        <Flex justifyContent="space-between" paddingTop={4}>
          <NumberField />
          <Button>Agregar $ {getDiscountedPrice(productData.price, productData.discount)}</Button>
        </Flex>
      </Box>
    </Box>
  )
}

ProductDetail.propTypes = {
  productData: PropTypes.object
}

export default ProductDetail
