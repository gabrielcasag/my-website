import ThemeSwitcher from "../../components/ThemeSwitcher";
import Avatar from "../../components/Avatar";
import AboutMe from "../../components/AboutMe";
import ContactWays from "../../components/ContactWays";

import { Container } from "../../styles/pages/main";

export default function Main() {
  return (
    <Container>
      <ThemeSwitcher />
      <Avatar />
      <AboutMe />
      <ContactWays />
    </Container>
  );
}
