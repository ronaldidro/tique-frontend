import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const ModalDialog = ({ children, size = 'md', isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  )
}

ModalDialog.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string,
  isOpen: PropTypes.func,
  onClose: PropTypes.func
}

export default ModalDialog
