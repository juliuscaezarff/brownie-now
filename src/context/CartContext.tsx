import { ReactNode, createContext, useEffect, useState } from 'react'
import { Brownie } from '../pages/components/BrownieCard'
import { produce } from 'immer'

export interface CartItem extends Brownie {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addBrownietoCart: (brownie: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease'
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

const BROWNIE_ITEMS_STORAGE_KEY = "brownieDelivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(BROWNIE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItems) => {
    return total + cartItems.price * cartItems.quantity
  }, 0)

  function addBrownietoCart(brownie: CartItem) {
    const brownieAlreadyExistsInCart = cartItems.findIndex(
      cartItems => cartItems.id === brownie.id
    )

    const newCart = produce(cartItems, (draft) => {
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

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, draft => {
      const brownieExistsInCart = cartItems.findIndex(
        cartItems => cartItems.id === cartItemId
      )

      if (brownieExistsInCart >= 0) {
        draft.splice(brownieExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(BROWNIE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addBrownietoCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
