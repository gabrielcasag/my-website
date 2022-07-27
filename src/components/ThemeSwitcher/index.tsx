import { useTheme } from "../../contexts/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { Container } from "./styles";

export default function ThemeSwitcher() {
  const { toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <Container>
      <FiSun onClick={handleToggleTheme} />
      <FiMoon onClick={handleToggleTheme} />
    </Container>
  );
}
