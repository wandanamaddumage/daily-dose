import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import coffeLogoImage from '../../assets/Daily-Dose.jpg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img
            src={coffeLogoImage}
            alt=""
            style={{ width: 'auto', height: '100px' }}
          />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" className="pr-1" />
            Colombo, Sri Lanka
          </HeaderButton>

          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
