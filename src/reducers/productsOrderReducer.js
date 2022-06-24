const productsOrderReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_PRODUCT':
      return [...state, action.data]

    case 'MODIFY_PRODUCT':
      return state.map(product => (product.id !== action.data.id ? product : action.data))

    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.data.id)

    default:
      return state
  }
}

export const addProduct = productData => {
  return {
    type: 'NEW_PRODUCT',
    data: productData
  }
}

export const updateProduct = productData => {
  return {
    type: 'MODIFY_PRODUCT',
    data: productData
  }
}

export const deleteProduct = productData => {
  return {
    type: 'REMOVE_PRODUCT',
    data: productData
  }
}

export default productsOrderReducer
