import { Route, Routes } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import Footer from './components/Footer'
import MenuDashboard from './components/MenuDashboard'
import OrderDetail from './components/OrderDetail'

const App = () => {
  return (
    <Container maxW="5xl">
      <Routes>
        <Route path="/" element={<MenuDashboard />} />
        <Route path="/pedido" element={<OrderDetail />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
