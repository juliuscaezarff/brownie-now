import { RegularText, TitleText } from '../../../components/Typegraphy'
import { brownies } from '../../../data'
import { BrownieCard } from '../BrownieCard'
import { BrownieList, OurBrowniesContainer } from './styles'

export function OurBrownies() {
  return (
    <OurBrowniesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Brownies
      </TitleText>

      <BrownieList>
        {brownies.map((brownie) => (
        <BrownieCard key={brownie.id} brownie={brownie}/>
        ))}
      </BrownieList>
    </OurBrowniesContainer>
  )
}
