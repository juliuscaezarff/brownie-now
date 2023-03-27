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
  const formattedPrice = formatMoney(brownie.price)

  return (
    <BrownieCardContainer className="container">
      <img
        src="https://media.istockphoto.com/id/1270135450/pt/foto/brownie.jpg?s=612x612&w=0&k=20&c=c1pjkLM0vwZ2jdq-oRezrVn2_z-qvnJkePpGJ5wgzk8="
        alt=""
      />

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
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </BrownieCardContainer>
  )
}
function formateMoney(price: number) {
  throw new Error('Function not implemented.')
}

