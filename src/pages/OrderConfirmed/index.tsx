import { RegularText, TitleText } from '../../components/Typegraphy'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhul! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que seu brownie está á caminho
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-brown']}
            text={
              <RegularText>
                Entrega em <strong>"Nome da Rua" 1234</strong>
                <br />
                Humaitá - Amazonas
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-green']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
