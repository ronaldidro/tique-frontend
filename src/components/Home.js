import { SimpleGrid } from '@chakra-ui/react'
import { useResource } from '../hooks'
import CircularSpinner from './CircularSpinner'
import Company from './Company'

const Home = () => {
  const companies = useResource('/companies')

  if (!Object.keys(companies).length) return <CircularSpinner />

  return (
    <SimpleGrid columns={[2, 3]} spacing={10} marginY={5}>
      {companies.map((company, index) => (
        <Company key={index} companyData={company} />
      ))}
    </SimpleGrid>
  )
}

export default Home
