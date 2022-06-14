import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'

const NumberField = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    defaultValue: 1,
    min: 1
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxWidth="150px">
      <Button {...inc}>+</Button>
      <Input {...input} textAlign="center" />
      <Button {...dec}>-</Button>
    </HStack>
  )
}

export default NumberField
