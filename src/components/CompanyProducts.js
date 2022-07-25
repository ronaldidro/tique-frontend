import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useResource } from '../hooks'
import { initializeProducts } from '../reducers/productsReducer'
import { getFilteredProducts, getProductsOrder } from '../utils'
import CircularSpinner from './CircularSpinner'
import Filters from './Filters'
import Header from './Header'
import LinkButton from './LinkButton'
import ProductCategories from './ProductCategories'
import UsageStepsModal from './UsageStepsModal'

const CompanyProducts = () => {
  const { id } = useParams()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const company = useResource(`/api/companies/${id}`)
  const dispatch = useDispatch()
  const productsOrder = getProductsOrder()
  const products = getFilteredProducts()

  useEffect(() => onOpen(), [])

  useEffect(() => {
    if (company.productCategories) dispatch(initializeProducts(company.productCategories))
  }, [company])

  if (!Object.keys(company).length) return <CircularSpinner />

  return (
    <>
      <Header companyData={company} />
      <Filters />
      <ProductCategories productCategoriesData={products} />
      {productsOrder.length > 0 && (
        <LinkButton label="Ver Pedido" pathname="/pedido" position="fixed" bottom="35px" right="35px" />
      )}
      <UsageStepsModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default CompanyProducts
