export const convertToPercent = value => `${value * 100} %`

export const getDiscountedPrice = (price, discount) => (price * (1 - discount)).toFixed(2)
