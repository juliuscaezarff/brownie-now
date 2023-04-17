import { Children, ReactNode, createContext, useState } from 'react'
import { Brownie } from '../pages/components/BrownieCard'

export interface CartItem extends Brownie {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addBrownietoCart(brownie: CartItem) {
    
  }

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
