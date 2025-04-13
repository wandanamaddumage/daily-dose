import styled from 'styled-components'

import heroBackgroundImage from '../../../../assets/hero-background.png'
import { TitleText } from '../../../../components/Typography'

export const HeroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${heroBackgroundImage})`} no-repeat center;
  background-size: cover;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  > div {
    flex: 1;
  }

  > div.imageContainer {
    flex: 1;

    img {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    gap: 1rem;
    margin-top: 20rem;
    flex-direction: column-reverse;
    > img {
      width: 100%;
    }
  }
`

export const HeroTitle = styled(TitleText)`
  margin-bottom: 1rem;
  color: white;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
  column-gap: 1.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 2fr;
    margin-top: 3rem;
    font-size: 1.1rem;
  }
  color: white;
`
