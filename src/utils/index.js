import { useSelector } from 'react-redux'

export const convertToPercent = value => `${value * 100} %`

export const getDiscountedPrice = (price, discount) => (price * (1 - discount)).toFixed(2)

export const getProductsOrder = () => useSelector(state => state.productsOrder)

export const getProductOrderById = id => getProductsOrder().find(product => product.id === id)

export const getProducts = () => useSelector(state => state.products)

export const getFilteredProducts = () =>
  useSelector(({ filter, products }) => {
    if (filter.mode === 'ALL') return products
    if (filter.mode === 'BY_CATEGORY') return products.filter(category => category.id === filter.content)
    if (filter.mode === 'BY_NAME') {
      const initialFilter = products.map(({ id, description, products }) => {
        const productsFiltered = products.filter(product =>
          product.name.toLocaleLowerCase().includes(filter.content.toLocaleLowerCase())
        )
        return { id, description, products: productsFiltered }
      })
      return initialFilter.filter(item => item.products.length > 0)
    }
  })

export const validateRequired = value => !value && 'Campo obligatorio'

export const orderModeOptions = [
  { label: 'Recojo en tienda', value: 'pickup' },
  { label: 'Entrega a domicilio', value: 'delivery' }
]

export const paymentMethodOptions = [
  { label: 'Efectivo', value: 'cash' },
  { label: 'Tarjeta', value: 'card' },
  { label: 'Transferencia', value: 'transfer' }
]

export const urlLineBreak = '%0A'

export const showToast = (toast, toastData) => toast({ ...toastData })
