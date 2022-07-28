import { Box, SimpleGrid } from '@chakra-ui/react'
import { useResource } from '../hooks'
import CircularSpinner from './CircularSpinner'
import Company from './Company'
import SearchField from './SearchField'

const Home = () => {
  const companies = useResource('/api/companies')

  if (!Object.keys(companies).length) return <CircularSpinner />

  return (
    <Box marginY={5}>
      <SearchField marginBottom={5} />
      <SimpleGrid columns={[2, 3]} spacing={[5, 10]}>
        {companies.map((company, index) => (
          <Company key={index} companyData={company} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Home
