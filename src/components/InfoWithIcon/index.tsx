import { ReactNode } from "react";
import { IconContainer, InfoWithIconConatiner } from "./styles";

interface InfoWithiconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithiconProps) {
  return (
    <InfoWithIconConatiner>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconConatiner>
  )
} 