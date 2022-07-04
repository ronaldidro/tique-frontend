import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { RepeatIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, HStack, Text, useToast } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import PropTypes from 'prop-types'
import { deleteAllProducts } from '../reducers/productsOrderReducer'
import { getProductsOrder, orderModeOptions, paymentMethodOptions, showToast, validateRequired } from '../utils'
import { sendMessage } from '../utils/message'
import RadioField from './RadioField'
import TextField from './TextField'

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

const OrderForm = ({ closeForm }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productsOrder = getProductsOrder()
  const toast = useToast()

  const orderShippingNotification = {
    title: '¡Pedido completado!',
    description: 'Acabamos de enviar tu pedido vía Whatsapp 🙂',
    status: 'success',
    position: 'top-right',
    variant: 'left-accent',
    duration: null,
    isClosable: true
  }

  const handleSendOrder = values => {
    const orderData = { ...values, products: productsOrder }
    sendMessage(orderData)
    closeForm()
    dispatch(deleteAllProducts())
    showToast(toast, orderShippingNotification)
    navigate('/')
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        datetime: '',
        orderMode: 'pickup',
        paymentMethod: 'cash'
      }}
      onSubmit={handleSendOrder}
    >
      {() => (
        <Form>
          <OrderSectionTitle title="Contacto" icon={<RepeatIcon />} />
          <HStack paddingBottom={4}>
            <TextField name="firstName" label="Nombres" validate={validateRequired} />
            <TextField name="lastName" label="Apellidos" validate={validateRequired} />
          </HStack>
          <TextField name="address" label="Dirección" validate={validateRequired} paddingBottom={4} />

          <OrderSectionTitle title="Modo de pedido" icon={<RepeatIcon />} />
          <RadioField name="orderMode" validate={validateRequired} options={orderModeOptions} paddingBottom={4} />

          <OrderSectionTitle title="Fecha y hora del pedido" icon={<RepeatIcon />} />
          <TextField name="datetime" type="datetime-local" validate={validateRequired} paddingBottom={4} />

          <OrderSectionTitle title="Método de pago" icon={<RepeatIcon />} />
          <RadioField
            name="paymentMethod"
            validate={validateRequired}
            options={paymentMethodOptions}
            paddingBottom={4}
          />

          <Button width="full" type="submit">
            Enviar Pedido
          </Button>
          <Box textAlign="center" paddingTop={4}>
            <Text as="cite">Su pedido será enviado a través de Whatsapp</Text>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

OrderForm.propTypes = {
  closeForm: PropTypes.func
}

OrderSectionTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element
}

export default OrderForm
