import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart';

export function Header() {
  const { cartQuantity } = useCart();
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          {/* <img src={coffeeLogoImg} alt="" /> */}
          <h1>
            brownie<span>NOW</span>
          </h1>
        </NavLink>
        <HeaderButtonContainer>
          <HeaderButton variant="white">
            <MapPin size={20} weight="fill" />
            Humaitá, AM
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="brown">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}
