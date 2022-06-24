import { useDispatch } from 'react-redux'
import { IconButton, ModalBody, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'
import { addProduct } from '../reducers/productsOrderReducer'
import ModalDialog from './ModalDialog'
import ProductDetail from './ProductDetail'

const ProductDetailModal = ({ productData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()

  const addOrderProduct = event => {
    event.preventDefault()

    const quantity = parseInt(event.target.quantity.value)
    const discountedPrice = parseFloat(event.target.discountedPrice.value)
    const totalPrice = parseFloat(event.target.totalPrice.value)

    const productOrder = { ...productData, quantity, discountedPrice, totalPrice }

    dispatch(addProduct(productOrder))

    onClose()
  }

  return (
    <>
      <IconButton onClick={onOpen} size="sm" icon={<AddIcon />} />
      <ModalDialog isOpen={isOpen} onClose={onClose} size={['full', '3xl']}>
        <ModalBody padding={0}>
          <ProductDetail productData={productData} handleAddProduct={addOrderProduct} />
        </ModalBody>
      </ModalDialog>
    </>
  )
}

ProductDetailModal.propTypes = {
  productData: PropTypes.object
}

export default ProductDetailModal
