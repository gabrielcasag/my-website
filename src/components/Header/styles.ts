import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  font-size: 0.5rem;

  svg {
    height: auto;
    width: 1.8rem;
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

  @media (min-width: 720px) {
    max-width: 650px;
  }
`;
