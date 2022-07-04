import { Box, Button, ModalBody, ModalHeader, useDisclosure } from '@chakra-ui/react'
import ModalDialog from './ModalDialog'
import OrderForm from './OrderForm'

const OrderFormButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box textAlign="center">
      <Button onClick={onOpen} marginY={5}>
        Finalizar Pedido
      </Button>
      <ModalDialog isOpen={isOpen} onClose={onClose} size={['full', 'xl']}>
        <ModalHeader>Ingresa tu información</ModalHeader>
        <ModalBody>
          <OrderForm closeForm={onClose} />
        </ModalBody>
      </ModalDialog>
    </Box>
  )
}

export default OrderFormButton
