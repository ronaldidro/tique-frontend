import { List } from '@chakra-ui/react'
import OrderListItem from './OrderListItem'

const OrderList = () => {
  return (
    <List>
      <OrderListItem />
      <OrderListItem />
      <OrderListItem />
    </List>
  )
}

export default OrderList
