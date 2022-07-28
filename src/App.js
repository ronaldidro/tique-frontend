import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import CompanyProducts from './components/CompanyProducts'
import Footer from './components/Footer'
import Home from './components/Home'
import OrderDetail from './components/OrderDetail'

const App = () => {
  return (
    <Container maxW="5xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compania/:id" element={<CompanyProducts />} />
        <Route path="/pedido" element={<OrderDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
