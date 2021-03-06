import ContactItem from "../ContactItem";

import {
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiGithub,
  FiGitlab,
} from "react-icons/fi";

import * as S from "./styles";

export default function ContactWays() {
  return (
    <S.Container>
      <ContactItem
        icon={<FiGithub />}
        label="GitHub"
        link="https://github.com/gabrielcasag"
      />
      <ContactItem
        icon={<FiMail />}
        label="Gmail"
        link="mailto:gaspericasag@gmail.com"
      />
      <ContactItem
        icon={<FiInstagram />}
        label="Instagram"
        link="https://www.instagram.com/gabrielcasag_/"
      />
      <ContactItem
        icon={<FiLinkedin />}
        label="LinkedIn"
        link="https://www.linkedin.com/in/gabrielcasag/"
      />
    </S.Container>
  );
}
