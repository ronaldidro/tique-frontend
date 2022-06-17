import { CheckCircleIcon } from '@chakra-ui/icons'
import { Button, List, ListIcon, ListItem, ModalBody, ModalFooter, ModalHeader, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import ModalDialog from './ModalDialog'

const UsageStepsModal = ({ isOpen, onClose }) => {
  return (
    <ModalDialog isOpen={isOpen} onClose={onClose}>
      <ModalHeader>Welcome to Tique App</ModalHeader>
      <ModalBody>
        <Text paddingBottom={3}>Place your order with these simple steps:</Text>
        <List spacing={3}>
          <ListItem display="flex" alignItems="start">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Search and choose the products you want
          </ListItem>
          <ListItem display="flex" alignItems="start">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Review and complete the details of your order
          </ListItem>
          <ListItem display="flex" alignItems="start">
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Ready! We will take care of sending your order via Whatsapp to your favorite company
          </ListItem>
        </List>
      </ModalBody>
      <ModalFooter>
        <Button width="full" onClick={onClose}>
          Genial!
        </Button>
      </ModalFooter>
    </ModalDialog>
  )
}

UsageStepsModal.propTypes = {
  isOpen: PropTypes.func,
  onClose: PropTypes.element
}

export default UsageStepsModal
