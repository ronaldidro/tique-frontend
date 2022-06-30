import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Image, Spacer, Tag, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { convertToPercent, getDiscountedPrice, getProductOrderById } from '../utils'
import ProductDetailModal from './ProductDetailModal'

const Product = ({ productData }) => {
  const productOrder = getProductOrderById(productData.id)

  return (
    <Flex shadow="md" borderWidth="1px" borderRadius="xl">
      <Flex flexDirection="column" justifyContent="space-between" padding={3} width="full">
        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Heading as="h3" fontSize="md">
              {productData.name}
              {productOrder && <CheckCircleIcon color="red.500" marginLeft={2} />}
            </Heading>
            {productData.discount > 0 && <Tag colorScheme="messenger">- {convertToPercent(productData.discount)}</Tag>}
          </Flex>
          <Text noOfLines={2}>{productData.description}</Text>
        </Box>
        <Flex alignItems="center">
          <ProductDetailModal productData={productData} />
          <Spacer />
          {productData.discount > 0 && (
            <Text as="del" paddingRight={2}>
              $ {productData.price}
            </Text>
          )}
          <Text>$ {getDiscountedPrice(productData.price, productData.discount)}</Text>
        </Flex>
      </Flex>
      <Image
        borderInlineEndRadius="xl"
        boxSize="130px"
        objectFit="cover"
        src="https://bit.ly/kent-c-dodds"
        alt="Dan Abramov"
      />
    </Flex>
  )
}

Product.propTypes = {
  productData: PropTypes.object
}

export default Product
