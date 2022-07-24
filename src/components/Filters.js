import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
import { getProducts } from '../utils'

const Filters = () => {
  const dispatch = useDispatch()

  const handleCategoryChange = ({ target }) =>
    dispatch(filterChange({ mode: target.value === '' ? 'ALL' : 'BY_CATEGORY', content: target.value }))

  const handleProductSearch = ({ target }) =>
    dispatch(filterChange({ mode: target.value === '' ? 'ALL' : 'BY_NAME', content: target.value }))

  return (
    <Box display={{ md: 'flex' }} marginY={2}>
      <InputGroup width={['100%', '65%']} marginRight={[0, 2]} marginBottom={[2, 0]}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input placeholder="Buscar producto" onChange={handleProductSearch} />
      </InputGroup>
      <Select placeholder="Categorías" width={['100%', '35%']} onChange={handleCategoryChange}>
        {getProducts().map(category => (
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
