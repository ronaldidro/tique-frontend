import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Badge, Divider, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import ModalButton from './ModalButton'
import OrderForm from './OrderForm'
import OrderList from './OrderList'

const OrderDetail = () => {
  const navigate = useNavigate()
  const productsOrder = useSelector(state => state.productsOrder)
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
          <Badge fontSize="md">Items : {orderTotalItems}</Badge>
          <Badge fontSize="md">Total : $ {orderTotalPrice.toFixed(2)}</Badge>
        </Flex>
      </Flex>
      <Divider />
      <OrderList productsOrder={productsOrder} />
      <ModalButton
        label="Finish Order"
        marginY={5}
        modalTitle="Enter your info"
        modalChildren={<OrderForm />}
        modalSize={['full', 'xl']}
      />
    </>
  )
}

export default OrderDetail
