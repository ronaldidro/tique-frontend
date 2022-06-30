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
      <OrderSectionTitle title="Contacto" icon={<RepeatIcon />} />
      <HStack paddingBottom={4}>
        <FormControl isRequired>
          <FormLabel htmlFor="first-name">Nombres</FormLabel>
          <Input id="first-name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="last-name">Apellidos</FormLabel>
          <Input id="last-name" />
        </FormControl>
      </HStack>
      <FormControl isRequired paddingBottom={4}>
        <FormLabel htmlFor="Address">Dirección</FormLabel>
        <Input id="address" />
      </FormControl>
      <OrderSectionTitle title="Modo de pedido" icon={<RepeatIcon />} />
      <FormControl as="fieldset" paddingBottom={4}>
        <RadioGroup defaultValue="Pickup">
          <HStack>
            <Radio value="Pickup">Recojo en tienda</Radio>
            <Radio value="Delivery">Entrega a domicilio</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <OrderSectionTitle title="Fecha y hora del pedido" icon={<RepeatIcon />} />
      <FormControl isRequired paddingBottom={4}>
        <Input type="datetime-local" id="datetime" />
      </FormControl>
      <OrderSectionTitle title="Método de pago" icon={<RepeatIcon />} />
      <FormControl as="fieldset" paddingBottom={8}>
        <RadioGroup defaultValue="Cash">
          <HStack>
            <Radio value="Cash">Efectivo</Radio>
            <Radio value="Card">Tarjeta</Radio>
            <Radio value="Wire transfer">Transferencia bancaria</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <Button width="full">Enviar Pedido</Button>
      <Box textAlign="center" paddingTop={4}>
        <Text as="cite">Su pedido será enviado a través de Whatsapp</Text>
      </Box>
    </>
  )
}

OrderSectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element
}

export default OrderForm
