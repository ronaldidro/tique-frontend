import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react'

const Filters = () => {
  return (
    <Box display={{ md: 'flex' }} marginY={2}>
      <InputGroup width={['100%', '65%']} marginRight={[0, 2]} marginBottom={[2, 0]}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input placeholder="Search product" />
      </InputGroup>
      <Select placeholder="Categories" width={['100%', '35%']}>
        <option value="option1">Category 1</option>
        <option value="option2">Category 2</option>
        <option value="option3">Category 3</option>
      </Select>
    </Box>
  )
}

export default Filters
