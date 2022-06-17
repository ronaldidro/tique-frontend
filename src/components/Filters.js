import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Filters = ({ categories }) => {
  if (!categories) return null

  return (
    <Box display={{ md: 'flex' }} marginY={2}>
      <InputGroup width={['100%', '65%']} marginRight={[0, 2]} marginBottom={[2, 0]}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input placeholder="Buscar producto" />
      </InputGroup>
      <Select placeholder="Categorias" width={['100%', '35%']}>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.description}
          </option>
        ))}
      </Select>
    </Box>
  )
}

Filters.propTypes = {
  categories: PropTypes.array
}

export default Filters
