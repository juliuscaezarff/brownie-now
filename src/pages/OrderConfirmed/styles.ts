import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1{
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  img {
    width: 34rem;
    height: 34rem;
  }

  >section{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors["base-background"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px; // border weight
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #3cb371 2.61%, #603000 98.76%);
  }
`;