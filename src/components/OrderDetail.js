import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Badge, Divider, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react'
import ModalButton from './ModalButton'
import OrderForm from './OrderForm'
import OrderList from './OrderList'

const OrderDetail = () => {
  return (
    <>
      <Flex alignItems="center" paddingY={4}>
        <IconButton icon={<ChevronLeftIcon />} />
        <Heading size="md" paddingLeft={4}>
          Your Order
        </Heading>
        <Spacer />
        <Flex gap={2}>
          <Badge fontSize="md">Nro. Items</Badge>
          <Badge fontSize="md">Price</Badge>
        </Flex>
      </Flex>
      <Divider />
      <OrderList />
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
