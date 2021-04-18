import styled, { css } from "styled-components";

export const Item = styled.div`
  margin: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    font-size: 1.1rem;
    font-weight: 300;
  }

  > a svg {
    font-size: 2rem;

    transition: filter 0.4s;
  }

  > a svg:hover {
    filter: opacity(60%);
    cursor: pointer;
  }

  ${(props) =>
    props.theme.title === "dark" &&
    css`
      > a svg:hover {
        filter: opacity(60%);
        cursor: pointer;
        text-shadow: 10px solid white;
      }
    `}

  @media (max-width: 380px) {
    margin: 0.5rem 0;

    > a svg {
      font-size: 2.5rem;
    }

    > span {
      display: none;
    }
  }
`;
