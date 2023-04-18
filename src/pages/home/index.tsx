import { OurBrownies } from '../components/OurBrownies'
import { Intro } from '../components/Intro'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurBrownies />
    </HomeContainer>
  )
}