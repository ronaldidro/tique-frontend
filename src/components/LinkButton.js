import { Link } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const LinkButton = ({ label, pathname, bgColor = 'gray', ...props }) => {
  return (
    <Link
      as={ReachLink}
      to={pathname}
      role="button"
      padding={3}
      backgroundColor={`${bgColor}.100`}
      borderRadius="md"
      fontWeight="bold"
      _hover={{ backgroundColor: `${bgColor}.200` }}
      {...props}
    >
      {label}
    </Link>
  )
}

LinkButton.propTypes = {
  label: PropTypes.string,
  pathname: PropTypes.string,
  bgColor: PropTypes.string
}

export default LinkButton
