import { OurBrownies } from "../components/OurBrownies";
import { Intro } from "../components/Intro";
import { HomeContainer } from "./styles";
import { Wave } from "../../components/Wave";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurBrownies />
    </HomeContainer>
  )
}