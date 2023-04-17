import { Children, ReactNode, createContext, useState } from 'react'
import { Brownie } from '../pages/components/BrownieCard'
import { produce } from 'immer'

export interface CartItem extends Brownie {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addBrownietoCart: (brownie: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

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

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) {
    const newCart = produce(cartItems, draft => {
      const brownieExistsInCart = cartItems.findIndex(
        cartItems => cartItems.id === cartItemId
      )

      if (brownieExistsInCart >= 0) {
        const item = draft[brownieExistsInCart]
        draft[brownieExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addBrownietoCart,
        changeCartItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
