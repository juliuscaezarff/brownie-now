import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/Default'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { HomePage } from './pages/home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  
  )
}
