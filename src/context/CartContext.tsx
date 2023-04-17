import { Children, ReactNode, createContext, useState } from 'react'
import { Brownie } from '../pages/components/BrownieCard'
import { produce } from 'immer'

export interface CartItem extends Brownie {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addBrownietoCart: (brownie: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addBrownietoCart(brownie: CartItem) {
    const brownieAlreadyExistsInCart = cartItems.findIndex(
      cartItems => cartItems.id === brownie.id
    )

    const newCart = produce(cartItems, draft => {
      if (brownieAlreadyExistsInCart < 0) {
        draft.push(brownie)
      } else {
        draft[brownieAlreadyExistsInCart].quantity += brownie.quantity
      }
    })

    setCartItems(newCart)
  }

  console.log(cartItems)

  return (
    <CartContext.Provider value={{ cartItems, addBrownietoCart }}>
      {children}
    </CartContext.Provider>
  )
}
