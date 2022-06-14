import { AddIcon } from '@chakra-ui/icons'
import { IconButton, ModalBody, useDisclosure } from '@chakra-ui/react'
import ModalDialog from './ModalDialog'
import ProductDetail from './ProductDetail'

const ProductDetailButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton onClick={onOpen} size="sm" icon={<AddIcon />} />
      <ModalDialog isOpen={isOpen} onClose={onClose} size={['full', '3xl']}>
        <ModalBody padding={0}>
          <ProductDetail />
        </ModalBody>
      </ModalDialog>
    </>
  )
}

export default ProductDetailButton
