import { TitleText } from "../../../../components/Typegraphy"
import { SectionTitle } from "../SectionTitle"
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine } from 'phosphor-react'
import { useTheme } from "styled-components";
import { AddressForm } from "./AddressForm";

export function CompleteOrderForm() {
  const { colors } = useTheme(); 

  return (
     <CompleteOrderFormContainer>
      <TitleText>
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22}/>}
        />

        <AddressForm />
      </FormSectionContainer>
     </CompleteOrderFormContainer>
  )
}