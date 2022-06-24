import { useDispatch } from 'react-redux'
import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Divider,
  Flex,
  HStack,
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
import PropTypes from 'prop-types'
import { deleteProduct, updateProduct } from '../reducers/productsOrderReducer'
import { convertToPercent } from '../utils'
import AlertIconButton from './AlertIconButton'
import { useRef } from 'react'

const OrderListItem = ({ productData }) => {
  const dispatch = useDispatch()
  const alertDialogRef = useRef()

  const updateOrderProduct = value => {
    const quantityUpdated = parseInt(value)
    const totalPriceUpdated = productData.discountedPrice * quantityUpdated
    const productUpdated = { ...productData, quantity: quantityUpdated, totalPrice: totalPriceUpdated }

    dispatch(updateProduct(productUpdated))
  }

  const deleteOrderProduct = () => {
    dispatch(deleteProduct(productData))
    alertDialogRef.current.closeAlert()
  }

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
            <Text>{productData.name}</Text>
            <HStack>
              <Text>
                $ {productData.price} $ {productData.discountedPrice}
              </Text>
              {productData.discount > 0 && (
                <Tag colorScheme="messenger">- {convertToPercent(productData.discount)}</Tag>
              )}
            </HStack>
          </Box>
        </Box>
        <Spacer />
        <HStack>
          <NumberInput
            allowMouseWheel
            size={['sm', 'md']}
            maxW={[16, 20]}
            min={1}
            defaultValue={productData.quantity}
            onChange={value => updateOrderProduct(value)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <AlertIconButton
            alertTitle="Eliminar Producto"
            alertContent={`¿Está seguro de eliminar ${productData.name} del pedido?`}
            icon={<DeleteIcon />}
            handleAfirmativeOption={deleteOrderProduct}
            ref={alertDialogRef}
          />
        </HStack>
      </Flex>
      <Divider />
    </ListItem>
  )
}

OrderListItem.propTypes = {
  productData: PropTypes.object
}

export default OrderListItem
