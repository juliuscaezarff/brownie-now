import styled from "styled-components"
import { SectionBaseStyles } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 1rem;

    h1 {
      text-align: center;
    }
  }
`;

export const FormSectionContainer = styled(SectionBaseStyles)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    .cep, .street, .complement {
      grid-column: span 1; 
    }
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;