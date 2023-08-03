import { TitleText } from '../../../../components/Typegraphy'
import { useCart } from '../../../../hooks/useCart'
import { BrownieCartCard } from '../BrownieCartCard'
import { ConfirmantionSection } from './ConfirmationSection'
import { DetailsContainer, SelectedBrowniesContainer } from './styles'

export function SelectedBrownies() {
  const { cartItems } = useCart()
  return (
    <SelectedBrowniesContainer>
      <TitleText size="xs" color="subtitle">
        Brownies selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
           <BrownieCartCard key={item.id} brownie={item}/>
        ))}

        <ConfirmantionSection />
      </DetailsContainer>
    </SelectedBrowniesContainer>
  )
}
