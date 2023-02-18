import { RegularText } from '../../../../components/Typegraphy'
import { Button } from "../../../../components/Button";
import { ConfirmationSectionContainer } from './styles'

export function ConfirmantionSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText>Total de itens</RegularText>
        <RegularText>R$</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$
        </RegularText>
      </div>

      <Button 
        text="Confirmar Pedido"
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
