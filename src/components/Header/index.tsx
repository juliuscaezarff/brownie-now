import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react"
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
        {/* <img src={coffeeLogoImg} alt="" /> */}
        <h1>brownie<span>NOW</span></h1>
        </NavLink>
        <HeaderButtonContainer>
          <HeaderButton variant="white">
            <MapPin size={20} weight="fill"/>
            Humaitá, AM 
          </HeaderButton>
          <NavLink to="/completeOrder">
          <HeaderButton variant="brown">
            <ShoppingCart size={20} weight="fill"/>
            </HeaderButton>
            </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}