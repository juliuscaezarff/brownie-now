import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors["base-white"]};
  font-weight: 700;
  background: ${({ theme }) => theme.colors["brand-yellow"]};
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
  
  &:disabled {
    opacity: 0.7rem;
    cursor: not-allowed;
  }

  &:not(disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]}
  }
`;