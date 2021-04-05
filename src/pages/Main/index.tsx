import Avatar from "../../components/Avatar";
import AboutMe from "../../components/AboutMe";
import ContactWays from "../../components/ContactWays";

import { Container } from "../../styles/pages/main";

export default function Main() {
  return (
    <Container>
      <Avatar />
      <AboutMe />
      <ContactWays />
    </Container>
  );
}
