import { TitleText } from '../../../../components/Typegraphy'
import { BrownieCartCard } from '../BrownieCartCard'
import { ConfirmantionSection } from './ConfirmationSection'
import { DetailsContainer, SelectedBrowniesContainer } from './styles'

export function SelectedBrownies() {
  return (
    <SelectedBrowniesContainer>
      <TitleText size="xs" color="subtitle">
        Brownies selecionados
      </TitleText>

      <DetailsContainer>
        <BrownieCartCard />
        <BrownieCartCard />
        <BrownieCartCard />

        <ConfirmantionSection  />
      </DetailsContainer>
    </SelectedBrowniesContainer>
  )
}
