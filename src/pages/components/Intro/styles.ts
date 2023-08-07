import styled from "styled-components";
// import brownie from '../../../assets/brownieImg.jpg'
import { rgba } from "polished"
import { TitleText } from "../../../components/Typegraphy";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  display: flex;
  align-items: center;

  justify-content: center;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  >img {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    margin-top: 10rem;
    
    > img {
      width: 100%;
      height: auto;
    }
  }
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;

  @media (max-width: 390px) {
    font-size: 1.5rem;
  }
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  grid-template-columns: 1fr 1fr;
  display: grid;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    column-gap: 2rem; 
    margin-left: 1.5rem;
  }
`;