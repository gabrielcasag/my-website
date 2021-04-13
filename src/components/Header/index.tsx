import { useTheme } from "../../contexts/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { Container } from "./styles";

export default function Header() {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Container onClick={handleToggleTheme}>
      <FiSun />
      <FiMoon />
    </Container>
  );
}
