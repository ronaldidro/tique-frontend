import { useSelector } from 'react-redux'

export const convertToPercent = value => `${value * 100} %`

export const getDiscountedPrice = (price, discount) => (price * (1 - discount)).toFixed(2)

export const getProductsOrder = () => useSelector(state => state.productsOrder)

export const getProductOrderById = id => getProductsOrder().find(product => product.id === id)
