import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useResource } from '../hooks'
import { getProductsOrder } from '../utils'
import Filters from './Filters'
import Header from './Header'
import LinkButton from './LinkButton'
import ProductCategories from './ProductCategories'
import UsageStepsModal from './UsageStepsModal'

const MenuDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const productsOrder = getProductsOrder()
  const [company] = useResource('/companies/628833ddae102b938986b124')

  useEffect(() => onOpen(), [])

  return (
    <>
      <Header companyData={company} />
      <Filters categories={company.productCategories} />
      <ProductCategories productCategoriesData={company.productCategories} />
      {productsOrder.length > 0 && (
        <LinkButton label="Ver Pedido" pathname="/order" position="fixed" bottom="35px" right="35px" />
      )}
      <UsageStepsModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default MenuDashboard
