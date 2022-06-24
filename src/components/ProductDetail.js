import { useState } from 'react'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Tag,
  Text,
  Textarea,
  useNumberInput
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { convertToPercent, getDiscountedPrice } from '../utils'

const ProductDetail = ({ productData, handleAddProduct }) => {
  const price = getDiscountedPrice(productData.price, productData.discount)
  const [priceCalc, setPriceCalc] = useState(price)

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    defaultValue: 1,
    min: 1
  })
  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  const handlePriceCalc = () => setPriceCalc((price * input.value).toFixed(2))

  return (
    <Box display={{ md: 'flex' }} maxHeight="md">
      <Image objectFit="cover" src="https://bit.ly/code-beast" alt="Dan Abramov" width={['100%', '50%']} />
      <Box width={['100%', '50%']} padding={2} backgroundColor="white">
        <Heading as="h1" size="md">
          {productData.name}
        </Heading>
        <Text paddingTop={2}>{productData.description}</Text>
        <HStack spacing={5} paddingY={4}>
          <Text>$ {price}</Text>
          {productData.discount > 0 && <Text as="del">$ {productData.price}</Text>}
          {productData.discount > 0 && <Tag colorScheme="messenger">- {convertToPercent(productData.discount)}</Tag>}
        </HStack>
        <Divider />
        <Text paddingY={4}>Comments</Text>
        <Textarea placeholder="Add anything" height="150px" resize="none" />
        <form onSubmit={handleAddProduct}>
          <Flex justifyContent="space-between" paddingTop={4}>
            <HStack maxWidth="150px">
              <Button {...inc} onClick={handlePriceCalc}>
                +
              </Button>
              <Input {...input} name="quantity" textAlign="center" />
              <Button {...dec} onClick={handlePriceCalc}>
                -
              </Button>
            </HStack>
            <Input display="none" name="discountedPrice" value={price} readOnly />
            <Input display="none" name="totalPrice" value={priceCalc} readOnly />
            <Button type="sumbit">Agregar $ {priceCalc}</Button>
          </Flex>
        </form>
      </Box>
    </Box>
  )
}

ProductDetail.propTypes = {
  productData: PropTypes.object,
  handleAddProduct: PropTypes.func
}

export default ProductDetail
