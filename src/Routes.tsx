import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { HomePage } from './pages/home'
import { OrderConfirmedPage } from './pages/OrderConfirmed'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  
  )
}
