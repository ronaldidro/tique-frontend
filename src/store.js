import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import productsOrderReducer from './reducers/productsOrderReducer'

const store = configureStore({
  reducer: {
    productsOrder: productsOrderReducer
  },
  devTools: composeWithDevTools()
})

export default store
