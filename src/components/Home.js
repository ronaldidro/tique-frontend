import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement, SimpleGrid } from '@chakra-ui/react'
import { useResource } from '../hooks'
import CircularSpinner from './CircularSpinner'
import Company from './Company'

const Home = () => {
  const companies = useResource('/api/companies')

  if (!Object.keys(companies).length) return <CircularSpinner />

  return (
    <Box marginY={5}>
      <InputGroup marginBottom={5}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input placeholder="Buscar" />
      </InputGroup>
      <SimpleGrid columns={[2, 3]} spacing={[5, 10]}>
        {companies.map((company, index) => (
          <Company key={index} companyData={company} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Home
