import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  BenefitsContainer,
} from './styles'

import heroImage from '../../../../assets/HeroImage.png'
import { RegularText } from '../../../../components/Typography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Hero() {
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">The right coffee for every hour</HeroTitle>
            <RegularText size="l" as="h3" style={{ color: '#FFFFFF' }}>
              With Daily Dose, receive your coffee anytime, anywhere.
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconColor={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
              text="A safe and easy way to shop"
            />
            <InfoWithIcon
              iconColor={colors['base-text']}
              icon={<Package weight="fill" />}
              text="Sealed to keep your coffee fresh and safe"
            />
            <InfoWithIcon
              iconColor={colors['brand-yellow']}
              icon={<Timer weight="fill" />}
              text="Quick and trackable delivery"
            />
            <InfoWithIcon
              iconColor={colors['brand-purple']}
              icon={<Coffee weight="fill" />}
              text="We bring fresh coffee right to you"
            />
          </BenefitsContainer>
        </div>

        <div className="imageContainer">
          <img src={heroImage} alt="" />
        </div>
      </HeroContent>
    </HeroContainer>
  )
}
