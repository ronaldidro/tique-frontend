import { RepeatIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, FormControl, FormLabel, HStack, Input, Radio, RadioGroup, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const OrderSectionTitle = ({ title, icon }) => {
  return (
    <>
      <HStack paddingBottom={2}>
        {icon}
        <Text>{title}</Text>
      </HStack>
      <Divider marginBottom={4} />
    </>
  )
}

const OrderForm = () => {
  return (
    <>
      <OrderSectionTitle title="Contact" icon={<RepeatIcon />} />
      <HStack paddingBottom={4}>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">First name</FormLabel>
          <Input id="first-name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="last-name">Last name</FormLabel>
          <Input id="last-name" />
        </FormControl>
      </HStack>
      <FormControl isRequired paddingBottom={4}>
        <FormLabel htmlFor="Address">Address</FormLabel>
        <Input id="address" />
      </FormControl>
      <FormControl paddingBottom={4}>
        <FormLabel htmlFor="cellphone">Cell phone number</FormLabel>
        <Input type="tel" id="cellphone" />
      </FormControl>
      <OrderSectionTitle title="Order mode" icon={<RepeatIcon />} />
      <FormControl as="fieldset" paddingBottom={4}>
        <RadioGroup defaultValue="Pickup">
          <HStack>
            <Radio value="Pickup">Pickup</Radio>
            <Radio value="Delivery">Delivery</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <OrderSectionTitle title="Order datetime" icon={<RepeatIcon />} />
      <FormControl isRequired paddingBottom={4}>
        <Input type="datetime-local" id="address" />
      </FormControl>
      <OrderSectionTitle title="Payment method" icon={<RepeatIcon />} />
      <FormControl as="fieldset" paddingBottom={8}>
        <RadioGroup defaultValue="Cash">
          <HStack>
            <Radio value="Cash">Cash</Radio>
            <Radio value="Card">Card</Radio>
            <Radio value="Wire transfer">Wire transfer</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <Button width="full">Send Order</Button>
      <Box textAlign="center" paddingTop={4}>
        <Text as="cite">Your order will be sent via Whatsapp</Text>
      </Box>
    </>
  )
}

OrderSectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element
}

export default OrderForm
