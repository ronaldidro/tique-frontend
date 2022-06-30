import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ModalDialog = ({ children, isOpen, onClose, ...props }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  )
}

ModalDialog.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  size: PropTypes.node,
  isCentered: PropTypes.bool
}

export default ModalDialog
