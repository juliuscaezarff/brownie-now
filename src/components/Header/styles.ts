import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    color: black;
  }

  span {
    color: brown;
  }

  @media (max-width: 390px) {
    > div {
      flex-direction: column;
    }

    h1,
    span {
      margin: 0.5rem 0;
    }
  }
`

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'white' | 'brown'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};

  ${({ variant, theme }) =>
    variant === 'brown' &&
    css`
      svg {
        color: ${theme.colors[`brand-brown`]};
      }
    `}
`
