import styled from "styled-components";

export const Item = styled.div`
  margin: 0 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > a svg {
    font-size: 2rem;

    transition: filter 0.4s;
  }

  > a svg:hover {
    filter: opacity(60%);
    cursor: pointer;
  }

  > span {
    font-size: 1.1rem;
    font-weight: 300;
  }
`;
