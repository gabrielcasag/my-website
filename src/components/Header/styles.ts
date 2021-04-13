import styled from "styled-components";

export const Container = styled.button`
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  padding: 0.5rem;
  outline: none;
  border: none;
  background: transparent;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    color: ${(props) => props.theme.colors.text};

    // sun icon
    &:first-child {
      transform: ${({ theme }) =>
        theme.title === "light"
          ? "translateX(20px) translateY(0) "
          : "translateY(-100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme.title === "light"
          ? "translateY(-100px) "
          : "translateX(-10px) translateY(0)"};
    }
  }
`;
