import { QuantityInputContainer, IconWrapper } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  quantity?: number
  onIncrease?: () => void
  onDecrease?: () => void
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium'
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly/>
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
