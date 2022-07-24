import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import filterReducer from './reducers/filterReducer'
import productsOrderReducer from './reducers/productsOrderReducer'
import productsReducer from './reducers/productsReducer'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    products: productsReducer,
    productsOrder: productsOrderReducer
  },
  devTools: composeWithDevTools()
})

export default store
