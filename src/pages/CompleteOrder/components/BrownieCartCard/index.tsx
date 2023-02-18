import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typegraphy'
import {
  ActionsContainer,
  BrownieCartCardContainer,
  RemoveButton
} from './styles'
import { Trash } from 'phosphor-react'
import brownieImg from '../../../../assets/brownieImageCard.jpg'

export function BrownieCartCard() {
  return (
    <BrownieCartCardContainer>
      <div>
        <img src={brownieImg} alt="" />
        <div>
          <RegularText color="subtitle">Brownie Normal</RegularText>
          <ActionsContainer>
            <QuantityInput size='small'/>
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </BrownieCartCardContainer>
  )
}
