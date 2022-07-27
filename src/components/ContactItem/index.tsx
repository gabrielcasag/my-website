import { ReactNode } from "react";

import * as S from "./styles";

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  link: string;
}

export default function ContactItem(props: ContactItemProps) {
  return (
    <S.Item>
      <a href={props.link} target="_blank" title={props.label}>
        {props.icon}
      </a>
      <span>{props.label}</span>
    </S.Item>
  );
}
