import Avatar from "../../components/Avatar";
import AboutMe from "../../components/AboutMe";
import ContactWays from "../../components/ContactWays";
import Header from "../../components/Header";

import { Container } from "../../styles/pages/main";
import TypeWriter from "../../components/TypeWriter";

export default function Main() {
  return (
    <Container>
      <Header />
      <Avatar />
      <AboutMe />
      <TypeWriter />
      <ContactWays />
    </Container>
  );
}
