import { Box, Flex, Heading, Image, Spacer, Tag, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { convertToPercent, getDiscountedPrice } from '../utils'
import ProductDetail from './ProductDetail'
import ProductDetailModal from './ProductDetailModal'

const Product = ({ productData }) => {
  return (
    <Flex shadow="md" borderWidth="1px" borderRadius="md">
      <Flex flexDirection="column" justifyContent="space-between" padding={3} width="full">
        <Box>
          <Flex justifyContent="space-between">
            <Heading as="h3" fontSize="md">
              {productData.name}
            </Heading>
            {productData.discount > 0 && <Tag colorScheme="messenger">- {convertToPercent(productData.discount)}</Tag>}
          </Flex>
          <Text noOfLines={2}>{productData.description}</Text>
        </Box>
        <Flex alignItems="center">
          <ProductDetailModal>
            <ProductDetail productData={productData} />
          </ProductDetailModal>
          <Spacer />
          {productData.discount > 0 && (
            <Text as="del" paddingRight={2}>
              $ {productData.price}
            </Text>
          )}
          <Text>$ {getDiscountedPrice(productData.price, productData.discount)}</Text>
        </Flex>
      </Flex>
      <Image boxSize="130px" objectFit="cover" src="https://bit.ly/kent-c-dodds" alt="Dan Abramov" />
    </Flex>
  )
}

Product.propTypes = {
  productData: PropTypes.object
}

export default Product
