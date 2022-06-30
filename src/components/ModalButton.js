import { Box, Button, ModalBody, ModalFooter, ModalHeader, useDisclosure } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import ModalDialog from './ModalDialog'

const ModalButton = ({
  label,
  modalTitle,
  modalChildren,
  modalFooter,
  modalSize = 'md',
  modalCentered = true,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box textAlign="center">
      <Button onClick={onOpen} {...props}>
        {label}
      </Button>
      <ModalDialog isOpen={isOpen} onClose={onClose} size={modalSize} isCentered={modalCentered}>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalBody>{modalChildren}</ModalBody>
        <ModalFooter>{modalFooter}</ModalFooter>
      </ModalDialog>
    </Box>
  )
}

ModalButton.propTypes = {
  label: PropTypes.string,
  modalTitle: PropTypes.string,
  modalChildren: PropTypes.element,
  modalFooter: PropTypes.element,
  modalSize: PropTypes.node,
  modalCentered: PropTypes.bool
}

export default ModalButton
