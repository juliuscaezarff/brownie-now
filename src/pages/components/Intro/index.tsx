import { RegularText } from '../../../components/Typegraphy'
import { InfoWithIcon } from '../../../components/InfoWithIcon'
import homeCakeShop from './../../../assets/homeCakeShop.svg'
import { useTheme } from 'styled-components'
import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from './styles'
import { ShoppingCart, Package, Timer, Cake } from 'phosphor-react'

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o brownie perfeito
              </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o brownieNow você recebe seu brownie onde estiver
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon 
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill"/>}
              text="Compra simples e segura"
            />
             <InfoWithIcon 
              iconBg={colors["base-text"]}
              icon={<Package weight="fill"/>}
              text="Embalagem mantém o brownie intacto"
            />
             <InfoWithIcon 
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill"/>}
              text="Entrega rápida e confiável"
            />
             <InfoWithIcon 
              iconBg={colors["brand-purple"]}
              icon={<Cake weight="fill"/>}
              text="Chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>

        <img src={homeCakeShop} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}

// minuto 56:27