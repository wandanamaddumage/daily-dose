import { CoffeeCard } from '../CoffeeCard'
import { TitleText } from '../Typography'
import { CoffeeList, OurCoffeesContainer } from './styles'

import { coffees } from '../../mock/coffee'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" style={{ color: '#FFFFFF' }}>
        Discover Our Coffees
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
