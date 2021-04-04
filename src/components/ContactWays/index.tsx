import ContactItem from "../ContactItem";

import {
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiGithub,
  FiGitlab,
} from "react-icons/fi";

import { Container } from "./styles";

export default function ContactWays() {
  return (
    <Container>
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
      <ContactItem
        icon={<FiMail />}
        label="Gmail"
        link="mailto:gaspericasag@gmail.com"
      />
      <ContactItem
        icon={<FiGithub />}
        label="GitHub"
        link="https://github.com/gabrielcasag"
      />
      <ContactItem
        icon={<FiGitlab />}
        label="GitLab"
        link="https://gitlab.com/gabrielcasag"
      />
    </Container>
  );
}
