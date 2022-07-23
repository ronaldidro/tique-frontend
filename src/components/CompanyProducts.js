import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useResource } from '../hooks'
import { getProductsOrder } from '../utils'
import CircularSpinner from './CircularSpinner'
import Filters from './Filters'
import Header from './Header'
import LinkButton from './LinkButton'
import ProductCategories from './ProductCategories'
import UsageStepsModal from './UsageStepsModal'

const CompanyProducts = () => {
  const { id } = useParams()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const productsOrder = getProductsOrder()
  const company = useResource(`/companies/${id}`)

  useEffect(() => onOpen(), [])

  if (!Object.keys(company).length) return <CircularSpinner />

  return (
    <>
      <Header companyData={company} />
      <Filters categories={company.productCategories} />
      <ProductCategories productCategoriesData={company.productCategories} />
      {productsOrder.length > 0 && (
        <LinkButton label="Ver Pedido" pathname="/pedido" position="fixed" bottom="35px" right="35px" />
      )}
      <UsageStepsModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default CompanyProducts
