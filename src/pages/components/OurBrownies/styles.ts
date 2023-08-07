import styled from "styled-components";

export const OurBrowniesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  @media(max-width: 390px) {
    margin-top: 10rem;
    text-align: center;
  }
`;

export const BrownieList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media (max-width: 390px) {
    grid-template-columns: 1fr;
  }
`;