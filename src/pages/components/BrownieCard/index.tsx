import { RegularText, TitleText } from '../../../components/Typegraphy'
import { QuantityInput } from '../../../components/QuantityInput'
import {
  BrownieCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '../../../utils/formateMoney';
import { useCart } from '../../../hooks/useCart';
import { useState } from 'react';

export interface Brownie {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface BrownieProps {
  brownie: Brownie;
}

export function BrownieCard({ brownie }: BrownieProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity(state => state + 1)
  }

  function handleDecrase() {
    setQuantity(state => state - 1)
  }

  const { addBrownietoCart } = useCart()

  function handleAddToCart() {
    const brownieToAdd = {
      ...brownie,
      quantity,
    }

    addBrownietoCart(brownieToAdd)
  }

  const formattedPrice = formatMoney(brownie.price)

  return (
    <BrownieCardContainer className="container">
      <img src={`/brownies/${brownie.photo}`} />

      <Tags>
        {brownie.tags.map(tag => (
          <span key={`${brownie.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{brownie.name}</Name>
      <Description>{brownie.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput 
            onIncrease={handleIncrease}
            onDecrease={handleDecrase}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </BrownieCardContainer>
  )
}