import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react'
import Filters from './Filters'
import Header from './Header'
import LinkButton from './LinkButton'
import ProductCategories from './ProductCategories'
import UsageStepsModal from './UsageStepsModal'

const MenuDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => onOpen(), [])

  return (
    <>
      <Header />
      <Filters />
      <ProductCategories />
      <LinkButton label="See Order" pathname="/order" position="fixed" bottom="35px" right="35px" />
      <UsageStepsModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default MenuDashboard
