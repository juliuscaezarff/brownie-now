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
`;

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  grid-template-columns: 1fr 1fr;
  display: grid;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;