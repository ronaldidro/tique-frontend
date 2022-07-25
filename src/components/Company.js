import { useNavigate } from 'react-router-dom'
import { RepeatIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const Company = ({ companyData }) => {
  const navigate = useNavigate()

  return (
    <Box
      shadow="md"
      borderWidth="1px"
      borderRadius="xl"
      cursor="pointer"
      onClick={() => navigate(`compania/${companyData.id}`)}
    >
      <Image borderTopRadius="xl" src="https://bit.ly/sage-adebayo" alt="Dan Abramov" />
      <Box padding={3}>
        <Heading size="md" paddingBottom={2}>
          {companyData.name}
        </Heading>
        <HStack paddingBottom={2}>
          <RepeatIcon />
          <Text noOfLines={2}>{companyData.address}</Text>
        </HStack>
        <HStack>
          <RepeatIcon />
          <Text noOfLines={2}>{companyData.placeService}</Text>
        </HStack>
      </Box>
    </Box>
  )
}

Company.propTypes = {
  companyData: PropTypes.object
}

export default Company
