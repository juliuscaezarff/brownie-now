import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typegraphy'
import {
  ActionsContainer,
  BrownieCartCardContainer,
  RemoveButton
} from './styles'
import { Trash } from 'phosphor-react'
import brownieImg from '../../../../assets/brownieImageCard.jpg'
import { CartItem } from '../../../../context/CartContext'
import { formatMoney } from '../../../../utils/formateMoney'
import { useCart } from '../../../../hooks/useCart'

interface BrownieCartCardProps {
  brownie: CartItem
}

export function BrownieCartCard({ brownie }: BrownieCartCardProps) {
  const { changeCartItemQuantity } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(brownie.id, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(brownie.id, "decrease")
  }

  const brownieTotal = brownie.price * brownie.quantity

  const formattedPrice = formatMoney(brownieTotal)
  return (
    <BrownieCartCardContainer>
      <div>
        <img src={`/brownies/${brownie.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">{brownie.name}</RegularText>
          <ActionsContainer>
            <QuantityInput size='small'  onIncrease={handleIncrease} onDecrease={handleDecrease} quantity={brownie.quantity}/>
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </BrownieCartCardContainer>
  )
}
