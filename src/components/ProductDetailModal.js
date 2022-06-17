import { IconButton, ModalBody, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'
import ModalDialog from './ModalDialog'

const ProductDetailModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton onClick={onOpen} size="sm" icon={<AddIcon />} />
      <ModalDialog isOpen={isOpen} onClose={onClose} size={['full', '3xl']}>
        <ModalBody padding={0}>{children}</ModalBody>
      </ModalDialog>
    </>
  )
}

ProductDetailModal.propTypes = {
  children: PropTypes.element
}

export default ProductDetailModal
