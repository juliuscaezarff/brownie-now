import { Router } from './Routes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { CartContextProvider } from './context/CartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <CartContextProvider>
          <Router />
        </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
