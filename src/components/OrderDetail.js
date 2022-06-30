import { useNavigate } from 'react-router-dom'
import { Badge, Divider, Flex, Heading, IconButton, Spacer, Text } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import ModalButton from './ModalButton'
import OrderForm from './OrderForm'
import OrderList from './OrderList'
import { getProductsOrder } from '../utils'

const OrderDetail = () => {
  const navigate = useNavigate()
  const productsOrder = getProductsOrder()
  const orderTotalPrice = productsOrder.reduce((acc, product) => acc + product.totalPrice, 0)
  const orderTotalItems = productsOrder.reduce((acc, product) => acc + product.quantity, 0)

  return (
    <>
      <Flex alignItems="center" paddingY={4}>
        <IconButton icon={<ChevronLeftIcon />} onClick={() => navigate('/')} />
        <Heading size="md" paddingLeft={4}>
          Tu Pedido
        </Heading>
        <Spacer />
        <Flex gap={2}>
          <Text as="em">Items:</Text>
          <Badge fontSize="md">{orderTotalItems}</Badge>
          <Text as="em">Total:</Text>
          <Badge fontSize="md" colorScheme="green">
            $ {orderTotalPrice.toFixed(2)}
          </Badge>
        </Flex>
      </Flex>
      <Divider />
      <OrderList productsOrder={productsOrder} />
      {productsOrder.length > 0 && (
        <ModalButton
          label="Finalizar Pedido"
          marginY={5}
          modalTitle="Ingresa tu información"
          modalChildren={<OrderForm />}
          modalSize={['full', 'xl']}
          modalCentered={false}
        />
      )}
    </>
  )
}

export default OrderDetail
