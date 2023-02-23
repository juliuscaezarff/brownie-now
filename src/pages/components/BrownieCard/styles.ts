import styled from 'styled-components'

export const BrownieCardContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: absolute;
    left: 50%;
    top: -50px;
    transform: translate(-50%);
    transition: 0.5s;
  }
`

export const BrownieBoxCotainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  background: #000;
  border-radius: 6px 36px 6px 36px;
  transition: 0.7s;

  &:hover {
    height: 12rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors["brand-brown"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`
